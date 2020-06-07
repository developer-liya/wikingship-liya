import React, {
  FC,
  useState,
  useRef,
  ChangeEvent,
  ReactElement,
  KeyboardEvent,
  useEffect,
} from "react";
import classNames from "classnames";
import Input, { InputProps } from "../Input/input";
import Icon from "../Icon/icon";
import Transition from "../Transition/transition";

// debource
import useDebounce from "../../hooks/useDebounce";
import useClickOutSide from "../../hooks/useClickOutSide";
// custom option

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  fetchSuggestions: (
    str: string
  ) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement; // 用户可以自定义select下拉 渲染模板的内容
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    onSelect,
    value,
    fetchSuggestions,
    renderOption,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debounceValue = useDebounce(inputValue, 500);
  useClickOutSide(componentRef, () => {
    setSuggestions([]);
  });
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      // 匹配数据
      const results = fetchSuggestions(debounceValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSuggestions(results);
        setShowDropdown(true);
        if (results.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debounceValue, fetchSuggestions]);

  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }

    setHighlightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.keyCode, "e.keyCode");
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        //   向上键
        highlight(highlightIndex - 1);
        break;
      case 40:
        //   向下键
        highlight(highlightIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestions([]);
        }}
      >
        <ul className="viking-suggestion-list">
          {loading && (
            <ul>
              <Icon icon="spinner" spin />
            </ul>
          )}
          {suggestions.map((item, index) => {
            const cnames = classNames("suggestion-item", {
              "is-active": index === highlightIndex,
            });
            return (
              <li
                key={index}
                className={cnames}
                onClick={() => {
                  handleSelect(item);
                }}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };
  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />

      {suggestions.length > 0 && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
// keyborad support

// click outside
