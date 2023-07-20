import { memo } from "react";
import { Button, TextField } from "@mui/material";
import { css } from "@emotion/css";

const Search = memo(() => {
  return (
    <div
      className={css`
        position: relative;
        border-radius: var(--br-5xl);
        background-color: var(--white-color);
        width: 1500px;
        height: 900px;
        overflow: hidden;
        text-align: left;
        font-size: 11.31px;
        color: var(--color-aqua);
        font-family: var(--font-poppins);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: -11.19px;
          right: 0.8px;
          width: 1499.2px;
          height: 969.38px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 11.19px;
            right: 0px;
            width: 1499.2px;
            height: 914.71px;
            object-fit: cover;
          `}
          alt=""
          src="/rectangle-42@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 0.19px;
            right: 1275.1px;
            background-color: var(--white-color);
            box-shadow: -0.8080974221229553px 0px 0px rgba(20, 27, 53, 0.12)
              inset;
            width: 224.1px;
            height: 969.19px;
            color: var(--natural-color-3);
            font-family: var(--font-roboto);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 584.94px;
              left: 32.25px;
              letter-spacing: 0.03em;
              text-transform: uppercase;
              font-weight: 500;
              color: var(--natural-color);
              display: inline-block;
              width: 93.27px;
              height: 18.41px;
            `}
          >
            ORGANIZATION
          </div>
          <div
            className={css`
              position: absolute;
              top: 27.61px;
              left: 31.38px;
              width: 129.88px;
              height: 50.66px;
              font-size: 16.16px;
              color: var(--natural-color);
              font-family: var(--font-inter);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 11.31px;
                left: 46.06px;
                font-weight: 600;
              `}
            >
              Human R.
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 39.63px;
                height: 40.03px;
                display: flex;
                flex-direction: column;
                padding: 0.000011200644621567335px 0px 23.380054473876953px
                  11.915604591369629px;
                box-sizing: border-box;
                align-items: center;
                justify-content: center;
              `}
            >
              <div
                className={css`
                  position: relative;
                  border-radius: 8.08px;
                  background-color: var(--secondary);
                  width: 39.68px;
                  height: 16.65px;
                  transform: rotate(45.7deg);
                  transform-origin: 0 0;
                `}
              />
              <div
                className={css`
                  position: relative;
                  border-radius: 50%;
                  background-color: var(--blue);
                  width: 33.13px;
                  height: 33.13px;
                  margin-top: -35.53px;
                `}
              />
            </div>
            <img
              className={css`
                position: absolute;
                height: 48.45%;
                width: 16.11%;
                top: 24.22%;
                right: 75.17%;
                bottom: 27.33%;
                left: 8.72%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/share.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 120.67px;
              left: 32.25px;
              letter-spacing: 0.03em;
              text-transform: uppercase;
              font-weight: 500;
              color: var(--natural-color);
              display: inline-block;
              width: 35.74px;
              height: 18.41px;
            `}
          >
            Menu
          </div>
          <div
            className={css`
              position: absolute;
              top: 329.28px;
              left: 32.25px;
              letter-spacing: 0.03em;
              text-transform: uppercase;
              font-weight: 500;
              color: var(--natural-color);
              display: inline-block;
              width: 86.29px;
              height: 18.41px;
            `}
          >
            Recruitment
          </div>
          <div
            className={css`
              position: absolute;
              top: 153.39px;
              left: 10.46px;
              border-radius: 8.08px;
              width: 205.71px;
              height: 45px;
              display: flex;
              flex-direction: row;
              padding: 9.697169303894043px 23.434825897216797px
                9.697169303894043px 19.394338607788086px;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-3xs-7);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
              src="/iconelement2.svg"
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Dashboard
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 204.52px;
              left: 10.46px;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Message
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 253.61px;
              left: 10.46px;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Calendar
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 362.01px;
              left: 10.46px;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Jobs
            </div>
          </div>
          <Button
            className={css`
              position: absolute;
              top: 411.09px;
              left: 10.46px;
            `}
            sx={{ width: 205.7111358642578 }}
            variant="contained"
            color="secondary"
            size="large"
            href="/search"
          >
            Dashboard
          </Button>
          <div
            className={css`
              position: absolute;
              top: 617.66px;
              left: 10.46px;
              border-radius: 8.08px;
              width: 205.71px;
              height: 45px;
              display: flex;
              flex-direction: row;
              padding: 9.697169303894043px 23.434825897216797px
                9.697169303894043px 19.394338607788086px;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-3xs-7);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
              src="/iconprofile2user.svg"
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Employee
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 460.18px;
              left: 10.46px;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              My Referrals
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 666.75px;
              left: 10.46px;
              border-radius: 8.08px;
              width: 205.71px;
              height: 45px;
              display: flex;
              flex-direction: row;
              padding: 9.697169303894043px 23.434825897216797px
                9.697169303894043px 19.394338607788086px;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-3xs-7);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
              src="/iconconvert3dcube.svg"
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Structure
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 509.26px;
              left: 10.46px;
              border-radius: 8.08px;
              width: 205.71px;
              height: 45px;
              display: flex;
              flex-direction: row;
              padding: 9.697169303894043px 23.434825897216797px
                9.697169303894043px 19.394338607788086px;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-3xs-7);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
              src="/iconmonitormobbile.svg"
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Career Site
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 715.83px;
              left: 10.46px;
              border-radius: 8.08px;
              width: 205.71px;
              height: 45px;
              display: flex;
              flex-direction: row;
              padding: 9.697169303894043px 23.434825897216797px
                9.697169303894043px 19.394338607788086px;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-3xs-7);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
              src="/iconboldnote.svg"
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Report
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 764.92px;
              left: 10.46px;
              border-radius: 8.08px;
              width: 205.71px;
              height: 46.02px;
              display: flex;
              flex-direction: row;
              padding: 9.697169303894043px 23.434825897216797px
                9.697169303894043px 19.394338607788086px;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-3xs-7);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 16.16px;
                height: 16.16px;
              `}
              alt=""
              src="/iconsetting.svg"
            />
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Settings
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 5.19px;
            right: 8.1px;
            background-color: var(--white-color);
            width: 1275.1px;
            height: 97.69px;
            display: flex;
            flex-direction: row;
            padding: 23.192564010620117px 34.788841247558594px;
            box-sizing: border-box;
            align-items: center;
            justify-content: flex-end;
            gap: 57.98px;
            font-size: 16.23px;
            color: var(--color-silver);
            font-family: var(--font-roboto);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                border-radius: var(--br-xs-6) 0px 0px var(--br-xs-6);
                background-color: var(--color-gray-100);
                width: 346.73px;
                display: flex;
                flex-direction: row;
                padding: 12.755908966064453px 23.192564010620117px;
                box-sizing: border-box;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  position: relative;
                  font-weight: 500;
                `}
              >
                Search by anything
              </div>
            </div>
            <div
              className={css`
                border-radius: 0px var(--br-xs-6) var(--br-xs-6) 0px;
                background-color: var(--blue);
                display: flex;
                flex-direction: row;
                padding: 11.596282005310059px;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 23.19px;
                  height: 23.19px;
                `}
                alt=""
                src="/iconsearchnormal.svg"
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 23.19px;
              font-size: 6.96px;
              color: var(--white-color);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 27.83px;
                height: 27.83px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/need-help1.svg"
            />
            <div
              className={css`
                position: relative;
                width: 27.83px;
                height: 27.83px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: 70.63%;
                  width: 71.35%;
                  top: 8.54%;
                  right: 14.31%;
                  bottom: 20.83%;
                  left: 14.33%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/vector3.svg"
              />
              <img
                className={css`
                  position: absolute;
                  height: 8.33%;
                  width: 23.54%;
                  top: 83.33%;
                  right: 38.21%;
                  bottom: 8.33%;
                  left: 38.25%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/vector4.svg"
              />
              <img
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 100%;
                  right: -100%;
                  bottom: -100%;
                  left: 100%;
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                  opacity: 0;
                `}
                alt=""
                src="/vector5.svg"
              />
              <div
                className={css`
                  position: absolute;
                  height: 41.67%;
                  width: 41.67%;
                  top: 0%;
                  right: 0%;
                  bottom: 58.33%;
                  left: 58.33%;
                  border-radius: 50%;
                  background-color: var(--red);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  width: 32.34%;
                  top: 4.04%;
                  left: 60.63%;
                  font-weight: 500;
                  display: inline-block;
                `}
              >
                03
              </div>
            </div>
            <img
              className={css`
                position: relative;
                width: 46.39px;
                height: 46.39px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/frame-53.svg"
            />
          </div>
        </div>
        <b
          className={css`
            position: absolute;
            top: 134.19px;
            right: 477.65px;
            font-size: 74.35px;
            line-height: 120%;
            display: inline-block;
            color: #16171c;
            width: 755.55px;
            height: 257.77px;
          `}
        >
          Find the right person for the job.
        </b>
        <b
          className={css`
            position: absolute;
            top: 352.19px;
            right: 716.3px;
            font-size: 28.6px;
            line-height: 140%;
            display: inline-block;
            width: 516.9px;
            height: 189.11px;
          `}
        >
          Find the candidate that best fits your requirement with our platform
          because we believe in work to make your team work.
        </b>
        <div
          className={css`
            position: absolute;
            top: 577.19px;
            right: 848.25px;
            width: 384.95px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 16.28px;
            font-size: 13.56px;
          `}
        >
          <b
            className={css`
              position: relative;
              line-height: 140%;
            `}
          >
            Manager
          </b>
          <b
            className={css`
              position: relative;
              line-height: 140%;
            `}
          >
            Human Resource
          </b>
          <b
            className={css`
              position: relative;
              line-height: 140%;
            `}
          >
            Frontend Developer
          </b>
        </div>
        <div
          className={css`
            position: absolute;
            top: 544.19px;
            right: 964.59px;
            font-size: 16.28px;
            line-height: 140%;
            font-weight: 800;
            color: var(--color-gray-200);
            display: inline-block;
            width: 268.61px;
            height: 29.94px;
          `}
        >
          Trending Jobs keyword :
        </div>
        <TextField
          className={css`
            border: none;
            background-color: transparent;
            position: absolute;
            top: 624.19px;
            right: 712.39px;
          `}
          sx={{ width: 520.8163452148438 }}
          color="error"
          variant="filled"
          type="text"
          label="Username"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <TextField
          className={css`
            border: none;
            background-color: transparent;
            position: absolute;
            top: 697.19px;
            right: 716.29px;
          `}
          sx={{ width: 516.9121704101562 }}
          color="error"
          variant="filled"
          type="text"
          label="Location"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
        <Button
          className={css`
            position: absolute;
            top: 781.19px;
            right: 874.61px;
          `}
          sx={{ width: 179.59182739257812 }}
          variant="contained"
          color="secondary"
          size="large"
          href="/search2"
        >
          Search
        </Button>
        <img
          className={css`
            position: absolute;
            top: 274.19px;
            right: 8.4px;
            width: 662.81px;
            height: 632.38px;
          `}
          alt=""
          src="imageherro@2x.png"
        />
      </div>
    </div>
  );
});

export default Search;
