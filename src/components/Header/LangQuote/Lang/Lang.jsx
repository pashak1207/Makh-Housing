import "./Lang.css";
import Select from "react-select";

export function Lang({ lang, setLang, left, options }) {
  const classIs = left ? "langSelect__left langSelect" : "langSelect";

  function onChange(e) {
    setLang(e);
  }

  return (
    <div className="lang">
      <Select
        classNamePrefix={classIs}
        onChange={onChange}
        value={lang}
        options={options}
        isSearchable={false}
      />
    </div>
  );
}
