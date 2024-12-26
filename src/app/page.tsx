'use client'
import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {

  const [input, setInput] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [totalAgua, setTotalAgua] = useState(0)

  const handleSubmit = () => {
    if (input > 0) {
      console.log(`Quantidade adicionada: ${input}ml`);
      setTotalAgua((prevTotal) => prevTotal + input)
      setInput(0)
      setErrorMessage(""); // Limpa o erro ao enviar um valor válido
      
    } else {
      setErrorMessage("Por favor, insira um valor maior que 0."); // Define a mensagem de erro
    }
  };


  return (
    <div className="flex flex-col items-center gap-4 w-auto h-52">
      <div>Você bebeu {totalAgua} ml hoje</div>
      <Form
        value={input}
        onChange={(value) => setInput(value)}
        onSubmit={handleSubmit}
        error={errorMessage} // Passa a mensagem de erro como prop
      />
    </div>
  );
}
