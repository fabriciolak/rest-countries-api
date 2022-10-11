import { useNavigate } from "react-router-dom";

export function HandleGoBack() {
  const navigate = useNavigate()

  return (
    <span
      className="go-back"
      onClick={() => navigate(-1)}
    >← Voltar</span>
  )
}