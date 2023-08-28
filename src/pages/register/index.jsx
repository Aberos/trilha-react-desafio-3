import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleRegister,
  SubtitleRegister,
  Row,
  Wrapper,
  FazerLoginText,
  TermoUsoText,
} from "./styles";

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <div>
              <TitleRegister>Comece agora grátis</TitleRegister>
              <SubtitleRegister>
                Crie sua conta e make the change._
              </SubtitleRegister>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  placeholder="Nome completo"
                  leftIcon={<MdPerson />}
                  name="name"
                  control={control}
                />
                {errors.email && <span>Nome é obrigatório</span>}
                <Input
                  placeholder="E-mail"
                  leftIcon={<MdEmail />}
                  name="email"
                  control={control}
                />
                {errors.email && <span>E-mail é obrigatório</span>}
                <Input
                  type="password"
                  placeholder="Senha"
                  leftIcon={<MdLock />}
                  name="senha"
                  control={control}
                />
                {errors.senha && <span>Senha é obrigatório</span>}
                <Button
                  title="Criar minha conta"
                  variant="secondary"
                  type="submit"
                />
              </form>
              <Row>
                <TermoUsoText>
                  Ao clicar em "criar minha conta grátis", declaro que aceito as
                  Políticas de Privacidade e os Termos de Uso da DIO.
                </TermoUsoText>
              </Row>
              <Row>
                <FazerLoginText>
                  Já tenho conta.
                  <span onClick={handleLogin}> Fazer login</span>
                </FazerLoginText>
              </Row>
            </div>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
