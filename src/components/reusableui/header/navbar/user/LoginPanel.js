import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import GlobalContext from "../../../../context/GlobalContext";

export default function LoginPanel({ onClick, handleSubmit }) {
  const { username, setUsername, setIsLoginPanel, isLoginPanel } =
    useContext(GlobalContext);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const closeLoginPanel = () => {
    setIsLoginPanel(!isLoginPanel);
  };

  return (
    <LoginPanelStyled>
      <div className="overlay"></div>
      <div className="modal-content">
        <div className="modal-content-title">
          <h2>Login ou inscription</h2>

          <button onClick={closeLoginPanel} className="button">
            <RxCross1 className="icon" />
          </button>
        </div>
        <form
          className="modal-content-body"
          action="submit"
          onSubmit={handleSubmit}
        >
          <h3>Bienvenue sur Kasa</h3>
          <input
            htmlFor="username"
            placeholder="Veuillez entrer votre nom"
            type="text"
            onChange={handleChange}
            value={username}
            required
            pattern="[a-zA-Z0-9]+"
            minLength="2"
            maxLength="10"
          />
          <button>Continuer</button>
        </form>
      </div>
    </LoginPanelStyled>
  );
}

const LoginPanelStyled = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  .overlay {
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background-color: rgba(49, 49, 49, 0.6);
    transition: all 400ms ease;
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 400px;
    height: auto;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(49, 49, 49, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.34);
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    .modal-content-title {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 25px;
      border-bottom: 1px solid lightgrey;
      .button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
        width: 34px;
        height: 34px;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border-radius: 50%;
        .icon {
          width: 18px;
          height: 18px;
          color: white;
        }
        :hover {
          background-color: #ffffff60;
          transition: all 400ms ease;
        }
      }
      h2 {
        font-size: 16px;
        color: white;
      }
    }
    .modal-content-body {
      flex: 1;
      padding: 25px;
      color: white;
      display: flex;
      flex-direction: column;
      h3 {
        margin-bottom: 40px;
      }
      input {
        width: 100%;
        height: 40px;
        border: none;
        padding: 5px 10px;
        border-radius: 10px 10px 0px 0px;
      }
      button {
        width: 100%;
        height: 40px;
        padding: 5px 10px;
        border-radius: 0px 0px 10px 10px;
        border: none;
        cursor: pointer;
        background-color: #ffffff37;
        border-top: 1px solid lightgrey;
        color: white;
        font-size: 16px;
        :hover {
          background-color: #ffffff60;
          transition: all 400ms ease;
        }
      }
    }
  }
`;
