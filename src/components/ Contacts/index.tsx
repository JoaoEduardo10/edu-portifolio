import { ConteinerFlex } from "../ConteinerFlex";
import { Hearding } from "../Hearding";
import * as S from "./style";

import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { useAppSelector } from "../../store/hookes";

export const Contacts = () => {
  const { colorOn } = useAppSelector((item) => item.menu);
  const clase = colorOn ? "white" : "black";

  return (
    <S.Conteiner data-aos="fade-right" id="contato">
      <ConteinerFlex>
        <Hearding text="Contatos" />
        <S.ConteinerContacts>
          <S.Contact>
            <a
              href="http://joaoeduardoj920@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <HiOutlineMail />
              </div>
              <p className={`${clase}`}>EmaiL</p>
              <span>joaoeduardoj920@gmail.com</span>
            </a>
          </S.Contact>
          <S.Contact>
            <a
              href="https://api.whatsapp.com/send?phone=5586981320524"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <BsTelephone />
              </div>
              <p className={`${clase}`}>Telefone</p>
              <span>(86) 98132-0524</span>
            </a>
          </S.Contact>
          <S.Contact>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-eduardo-657887231/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <FaLinkedinIn />
              </div>
              <p className={`${clase}`}>Linkedin</p>
              <span>joão eduardo</span>
            </a>
          </S.Contact>
          <S.Contact>
            <a
              href="https://github.com/JoaoEduardo10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icons">
                <FiGithub />
              </div>
              <p className={`${clase}`}>GitHub</p>
              <span>@JoaoEduardo10</span>
            </a>
          </S.Contact>
        </S.ConteinerContacts>
      </ConteinerFlex>
    </S.Conteiner>
  );
};
