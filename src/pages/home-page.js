import { useEffect } from "react";
import { Button as MuiButton } from "@mui/material";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { css, keyframes } from "@emotion/css";

const animationScaleUp = keyframes`
    0% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`;
const HomePage = () => {
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
        opacity: 1;
        text-align: left;
        font-size: 5.28rem;
        color: var(--white-color);
        font-family: var(--font-lexend);
        &.animate {
          animation: 1s ease 0s 1 normal forwards ${animationScaleUp};
        }
      `}
      data-animate-on-scroll
    >
      <img
        className={css`
          position: absolute;
          top: 0rem;
          right: -26.25rem;
          width: 120rem;
          height: 67.5rem;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 6.31rem;
          left: 2.25rem;
          width: 89.31rem;
          height: 43.63rem;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0rem;
            left: 6.18rem;
            font-weight: 500;
            display: inline-block;
            width: 27.83rem;
            height: 8.08rem;
          `}
        >
          Higher Me
        </div>
        <div
          className={css`
            position: absolute;
            top: 29.52rem;
            left: 6.39rem;
            width: 24.08rem;
            height: 9.88rem;
          `}
        >
          <Button
            className={css`
              position: absolute;
              top: 5.92rem;
              left: 9.98rem;
            `}
            variant="solid"
            w="225.62469482421875px"
            colorScheme="pink"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
            as="a"
            href="/signup"
          >
            Sign Up
          </Button>
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              width: 14.1rem;
            `}
          />
        </div>
        <MuiButton
          className={css`
            position: absolute;
            top: 30.1rem;
            left: 6.39rem;
          `}
          sx={{ width: 225.62469482421875 }}
          variant="contained"
          color="secondary"
          size="large"
          href="/login"
        >
          Login
        </MuiButton>
        <div
          className={css`
            position: absolute;
            top: 10.46rem;
            left: 0rem;
            border-radius: 88.31px;
            border: 5.9px solid var(--white-color);
            box-sizing: border-box;
            width: 42.2rem;
            height: 8.56rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            padding: 0rem 0rem 0rem 0.05rem;
            align-items: flex-end;
            justify-content: center;
            font-size: 1.85rem;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-weight: 500;
            `}
          >
            <span>{`Hire the best `}</span>
            <span
              className={css`
                color: var(--color-aqua);
              `}
            >
              HR representatives
            </span>
            <span>{` and `}</span>
            <span
              className={css`
                color: var(--color-aqua);
              `}
            >
              Managers
            </span>
            <span> to take your Company Higher.</span>
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 2.64rem;
            left: 43.15rem;
            border-radius: 211.26px 126.76px 211.26px 126.76px;
            width: 46.16rem;
            height: 40.98rem;
            object-fit: cover;
          `}
          alt=""
          src="/pngtransparenthrmanagerwelcomesnewemployeeremovebg-1@2x.png"
        />
      </div>
    </div>
  );
};

export default HomePage;
