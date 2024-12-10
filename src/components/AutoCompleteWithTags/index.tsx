import React, { useEffect, useMemo, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";
import {
  AutoCompleteWithTagsContainer,
  AutoCompleteWithTagsSuggestions,
  AutoCompleteWithTagsWrapper,
  SelectedTags,
} from "./styles";

// import { Container } from './styles';

type Option = {
  value: string;
  label: string;
};

type AutoCompleteWithTagsProps = {
  tags: string[];
  setTags: (tags: string[]) => void;
  options: Option[];
  label?: string;
  error?: string;
};

const AutoCompleteWithTags: React.FC<AutoCompleteWithTagsProps> = ({
  options,
  setTags,
  tags,
  error,
  label,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const alreadyAddedTags = useMemo(() => {
    return options.filter((suggestion) => tags.includes(suggestion.value));
  }, [options, tags]);

  const suggestions = useMemo(() => {
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()) &&
        !tags.includes(option.value) &&
        option.value !== user?.id
    );

    if (!inputValue || !filteredOptions.length) {
      setShowSuggestions(false);
      return [];
    }

    setShowSuggestions(true);

    return filteredOptions;
  }, [inputValue, options, tags]);

  const handleAddTag = (tag: string) => {
    setInputValue("");
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <AutoCompleteWithTagsWrapper ref={containerRef}>
      {label && <label>{label}</label>}
      <AutoCompleteWithTagsContainer>
        {alreadyAddedTags.map((tag) => (
          <SelectedTags key={tag.value}>
            {tag.label}
            <CgClose onClick={() => handleRemoveTag(tag.value)} />
          </SelectedTags>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add user"
        />
      </AutoCompleteWithTagsContainer>
      {error && <span>{error}</span>}
      {showSuggestions && (
        <AutoCompleteWithTagsSuggestions>
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.value}
              onClick={() => handleAddTag(suggestion.value)}
            >
              {suggestion.label}
            </div>
          ))}
        </AutoCompleteWithTagsSuggestions>
      )}
    </AutoCompleteWithTagsWrapper>
  );
};

export default AutoCompleteWithTags;
