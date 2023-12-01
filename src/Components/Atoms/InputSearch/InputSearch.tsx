import React, { useCallback, useEffect, useState } from "react";
import styles from "./InputSearch.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const InputSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isGettingWF, setIsGettingWF] = useState(false);
  const [keyword, setKeyword] = useState("Jakarta");
  const [firstTime, setFirstTime] = useState(true);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const getWeatherForecast = useCallback(() => null, []);

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          getWeatherForecast();
        },
        () => null
      );
    }
  }, [getWeatherForecast]);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    }
  }, [dispatch, firstTime]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (isGettingWF) {
      setIsGettingWF(false);
      setFirstTime(false);
      getWeatherForecast();
    }
  }, [getWeatherForecast, isGettingWF]);

  return (
    <>
      <form className={styles["container"]} onSubmit={onSubmit}>
        <input
          className={styles["input"]}
          value={keyword}
          onChange={(e) => setKeyword(e.currentTarget.value)}
        />
        <button className={styles["btn-submit"]} type="submit">
          {"Search"}
        </button>
      </form>
    </>
  );
};

export default InputSearch;
