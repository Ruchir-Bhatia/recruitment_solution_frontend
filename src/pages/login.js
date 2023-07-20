import { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { css, keyframes } from "@emotion/css";

const animationFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `;
const Login = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className={css`
        position: relative;
        border-radius: var(--br-5xl);
        background-color: var(--white-color);
        width: 100%;
        height: 56.25rem;
        overflow: hidden;
        opacity: 0;
        text-align: left;
        font-size: 2.22rem;
        color: var(--white-color);
        font-family: var(--font-poppins);
        &.animate {
          animation: 1s ease 0s 1 normal forwards ${animationFadeIn};
        }
      `}
      data-animate-on-scroll
    >
      <div
        className={css`
          position: absolute;
          top: -0.06rem;
          right: 0rem;
          width: 88.44rem;
          height: 56.38rem;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0.06rem;
            right: 0rem;
            border-radius: 365px;
            width: 55.06rem;
            height: 56.38rem;
            object-fit: cover;
          `}
          alt=""
          src="/rectangle-44@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: calc(50% - 308.5px);
            left: calc(50% + 3.5px);
            border-radius: 55.03px;
            width: 34.53rem;
            height: 37.5rem;
          `}
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 11.94rem;
            right: 7.72rem;
            width: 47.72rem;
            height: 34.41rem;
            object-fit: cover;
          `}
          alt=""
          src="/women-with-tab-11@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 34.31rem;
            left: 38.75rem;
            width: 12.92rem;
            height: 8.59rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 10.47rem;
              height: 7.78rem;
            `}
            alt=""
            src="/ellipse-1.svg"
          />
          <img
            className={css`
              position: relative;
              width: 8.3rem;
              height: 8.3rem;
              object-fit: cover;
              margin-top: -4.56rem;
            `}
            alt=""
            src="/thunderbolt-11@2x.png"
          />
        </div>
        <b
          className={css`
            position: absolute;
            top: 11.75rem;
            left: 46.63rem;
            line-height: 3.19rem;
            display: inline-block;
            width: 14.69rem;
            height: 11.25rem;
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
        <form
          className={css`
            position: absolute;
            top: 7.88rem;
            left: 0rem;
            width: 27.81rem;
            height: 28.03rem;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 25.76rem;
              left: 0rem;
              width: 31.53rem;
              display: flex;
              flex-direction: column;
              padding: 0.99rem 0rem 1.05rem;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-end;
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
              src="/subtract1.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 28.97rem;
              left: 0rem;
              font-size: 1.07rem;
              text-align: center;
              display: inline-block;
              width: 31.53rem;
            `}
          >
            <b
              className={css`
                font-family: var(--font-poppins);
                color: var(--color-gray-200);
              `}
            >
              Login
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
          <b
            className={css`
              position: absolute;
              top: 0.61rem;
              left: 10.42rem;
              font-size: 3.35rem;
              text-transform: uppercase;
              display: inline-block;
              font-family: var(--font-poppins);
              color: var(--color-black);
              text-align: left;
              width: 10.67rem;
              height: 3.15rem;
            `}
          >
            Login
          </b>
          <div
            className={css`
              position: absolute;
              top: 6.85rem;
              left: 4.18rem;
              font-size: 1.07rem;
              font-family: var(--font-poppins);
              color: var(--color-dimgray);
              text-align: left;
              display: inline-block;
              width: 28.85rem;
              height: 2.08rem;
            `}
          >{`Get Started If you dont have an account ? `}</div>
          <TextField
            className={css`
              border: none;
              background-color: transparent;
              position: absolute;
              top: 16.06rem;
              left: 0rem;
            `}
            sx={{ width: 504.4539489746094 }}
            color="primary"
            variant="filled"
            label="Password"
          />
          <TextField
            className={css`
              border: none;
              background-color: transparent;
              position: absolute;
              top: 10.38rem;
              left: 0rem;
            `}
            sx={{ width: 504.4539489746094 }}
            color="primary"
            variant="filled"
            type="text"
            label="Username"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
          <Button
            className={css`
              position: absolute;
              top: 21.22rem;
              left: 0rem;
            `}
            sx={{ width: 226.09967041015625 }}
            variant="contained"
            color="secondary"
            size="large"
            href="/search"
          >
            Login
          </Button>
          <div
            className={css`
              position: absolute;
              top: 31.69rem;
              left: 0rem;
              width: 31.53rem;
              display: flex;
              flex-direction: column;
              padding: 0rem 0rem 0rem;
              box-sizing: border-box;
              align-items: center;
              justify-content: flex-start;
              gap: 1.34rem;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                border-radius: 17.17px;
                border: 1.1px solid var(--color-lavender);
                display: flex;
                flex-direction: column;
                padding: 0rem 9.53rem;
                align-items: flex-start;
                justify-content: center;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  height: 2.63rem;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.67rem;
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 2.6rem;
                    height: 2.63rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/google-11@2x.png"
                />
                <div
                  className={css`
                    position: relative;
                    font-size: 0.81rem;
                    color: var(--color-gray-200);
                    text-align: left;
                    display: inline-block;
                    width: 9.18rem;
                    height: 1.58rem;
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
                align-self: stretch;
                border-radius: 17.17px;
                border: 1.1px solid var(--color-lavender);
                box-sizing: border-box;
                height: 4.57rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              `}
            >
              <div
                className={css`
                  width: 14.03rem;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.67rem;
                `}
              >
                <img
                  className={css`
                    flex: 1;
                    position: relative;
                    max-width: 100%;
                    overflow: hidden;
                    height: 2.63rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/facebook-11@2x.png"
                />
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    font-size: 0.81rem;
                    color: var(--color-gray-200);
                    text-align: left;
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
          <Button
            className={css`
              position: absolute;
              top: 21.22rem;
              left: 16.62rem;
            `}
            sx={{ width: 224.59735107421875 }}
            variant="contained"
            color="secondary"
            size="large"
            href="/signup"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
