import { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { css } from "@emotion/css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={css`
        position: relative;
        border-radius: var(--br-5xl);
        background-color: var(--white-color);
        width: 100%;
        height: 56.25rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        font-size: 2.54rem;
        color: var(--white-color);
        font-family: var(--font-poppins);
      `}
    >
      <div
        className={css`
          box-shadow: 0px 4.2745561599731445px 4.27px rgba(0, 0, 0, 0.25);
          width: 90.57rem;
          height: 52.96rem;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 11.82rem;
        `}
      >
        <form
          className={css`
            position: relative;
            width: 26.85rem;
            height: 44.04rem;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: -0.02rem;
              left: 8.91rem;
              font-size: 2.15rem;
              text-transform: uppercase;
              display: inline-block;
              font-family: var(--font-poppins);
              color: var(--color-black);
              text-align: left;
              width: 17.18rem;
              height: 5.08rem;
            `}
          >
            Sign up
          </b>
          <div
            className={css`
              position: absolute;
              top: 2.66rem;
              left: 3.87rem;
              font-size: 1.15rem;
              font-family: var(--font-poppins);
              color: var(--color-dimgray);
              text-align: left;
              display: inline-block;
              width: 16.63rem;
              height: 1.72rem;
            `}
          >
            Make An Account Right Away
          </div>
          <TextField
            className={css`
              border: none;
              background-color: transparent;
              position: absolute;
              top: 10.88rem;
              left: 0rem;
            `}
            sx={{ width: 417.3570556640625 }}
            color="secondary"
            variant="filled"
            type="text"
            label="Email-ID"
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
              top: 6.23rem;
              left: 0rem;
            `}
            sx={{ width: 417.3570556640625 }}
            color="secondary"
            variant="filled"
            type="text"
            label="Full Name"
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
              top: 15.54rem;
              left: 0rem;
            `}
            fullWidth
            color="secondary"
            variant="filled"
            type="text"
            label="Username"
            placeholder="Placeholder"
            size="medium"
            margin="none"
            required
          />
          <div
            className={css`
              position: absolute;
              top: 33.01rem;
              left: 0rem;
              width: 26.16rem;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                border-radius: 18.35px;
                border: 1.1px solid var(--color-lavender);
                box-sizing: border-box;
                height: 3.78rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              `}
            >
              <div
                className={css`
                  width: 10.32rem;
                  height: 2.18rem;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.57rem;
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 2.15rem;
                    height: 2.18rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/google-1@2x.png"
                />
                <div
                  className={css`
                    position: relative;
                    font-size: 0.86rem;
                    color: var(--color-gray-200);
                    text-align: left;
                    display: inline-block;
                    width: 7.6rem;
                    height: 1.31rem;
                    flex-shrink: 0;
                  `}
                >
                  <span
                    className={css`
                      font-family: var(--font-poppins);
                    `}
                  >{`Login with `}</span>
                  <b
                    className={css`
                      font-family: var(--font-poppins);
                    `}
                  >
                    google
                  </b>
                </div>
              </div>
            </div>
            <div
              className={css`
                border-radius: 18.35px;
                border: 1.1px solid var(--color-lavender);
                box-sizing: border-box;
                width: 26.18rem;
                height: 5.98rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              `}
            >
              <div
                className={css`
                  width: 11.61rem;
                  height: 2.24rem;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.57rem;
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 2.15rem;
                    height: 2.24rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/facebook-1@2x.png"
                />
                <div
                  className={css`
                    position: relative;
                    font-size: 0.86rem;
                    color: var(--color-gray-200);
                    text-align: left;
                    display: inline-block;
                    width: 8.89rem;
                    height: 1.34rem;
                    flex-shrink: 0;
                  `}
                >
                  <span
                    className={css`
                      font-family: var(--font-poppins);
                    `}
                  >{`Login with `}</span>
                  <b
                    className={css`
                      font-family: var(--font-poppins);
                    `}
                  >
                    Facebook
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 19.98rem;
              left: 0rem;
              width: 26.09rem;
              height: 12.29rem;
              overflow: hidden;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 3.16rem;
                left: 0rem;
                width: 26.09rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: 7.24rem;
              `}
            >
              <img
                className={css`
                  align-self: stretch;
                  position: relative;
                  max-width: 100%;
                  overflow: hidden;
                  height: 0.07rem;
                  flex-shrink: 0;
                `}
                alt=""
                src="/subtract.svg"
              />
              <div
                className={css`
                  position: relative;
                  font-size: 1.15rem;
                  text-align: left;
                  display: inline-block;
                  width: 11.68rem;
                  height: 1.78rem;
                  flex-shrink: 0;
                `}
              >
                <b
                  className={css`
                    font-family: var(--font-poppins);
                    color: var(--color-gray-200);
                  `}
                >
                  Sign Up
                </b>
                <span
                  className={css`
                    font-family: var(--font-poppins);
                    color: var(--color-dimgray);
                  `}
                >
                  {" "}
                  with Others
                </span>
              </div>
            </div>
            <Button
              className={css`
                position: absolute;
                top: 4.88rem;
                left: 7.6rem;
              `}
              sx={{ width: 175.4275665283203 }}
              variant="contained"
              color="secondary"
              size="large"
              href="/login"
            >
              Sign Up
            </Button>
            <TextField
              className={css`
                border: none;
                background-color: transparent;
                position: absolute;
                top: 0rem;
                left: 0rem;
              `}
              fullWidth
              color="primary"
              variant="filled"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
          </div>
        </form>
        <div
          className={css`
            position: relative;
            width: 47.94rem;
            height: 57.57rem;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 2.3rem;
              right: 0rem;
              width: 47.94rem;
              height: 57.57rem;
              object-fit: cover;
            `}
            alt=""
            src="/rectangle-41@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 302.42px);
              left: calc(50% - 347.45px);
              width: 39.98rem;
              height: 35.55rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 284.39px);
                left: calc(50% - 158.76px);
                border-radius: 49.81px;
                background-color: rgba(255, 255, 255, 0.21);
                backdrop-filter: blur(14.73px);
                border: 1.1px solid rgba(255, 255, 255, 0.52);
                box-sizing: border-box;
                width: 27.88rem;
                height: 35.46rem;
              `}
            />
            <img
              className={css`
                position: absolute;
                top: 6.52rem;
                right: 0rem;
                width: 39.98rem;
                height: 29.03rem;
                object-fit: cover;
              `}
              alt=""
              src="/women-with-tab-1@2x.png"
            />
            <b
              className={css`
                position: absolute;
                top: 1.03rem;
                left: 11.01rem;
                line-height: 3.64rem;
                display: inline-block;
                width: 15.29rem;
                height: 17.59rem;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >
                Candidates
              </p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                are waiting
              </p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                to be hired
              </p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                Hurry Up !!!
              </p>
            </b>
          </div>
          <div
            className={css`
              position: absolute;
              top: 33.28rem;
              left: 8.43rem;
              width: 7.78rem;
              height: 7.72rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-end;
            `}
          >
            <div
              className={css`
                position: relative;
                border-radius: 50%;
                background-color: var(--white-color);
                width: 7.75rem;
                height: 7.75rem;
              `}
            />
            <img
              className={css`
                position: relative;
                width: 4.12rem;
                height: 4.12rem;
                object-fit: cover;
                margin-top: -5.99rem;
              `}
              alt=""
              src="/thunderbolt-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
