package br.com.dio.model;

import java.util.Objects;

public class Gato {
	private String nome;
	private String cor;
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cor, idade, nome);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Gato other = (Gato) obj;
		return Objects.equals(cor, other.cor) && Objects.equals(idade, other.idade) && Objects.equals(nome, other.nome);
	}

	public String getIdade() {
		return idade;
	}

	public void setIdade(String idade) {
		this.idade = idade;
	}

	private String idade;
	
	public Gato() {}
	
	public Gato(String nome, String cor, String idade) {
		this.nome = nome;
		this.cor = cor;
		this.idade = idade;
	}

	@Override
	public String toString() {
		return "Gato [nome=" + nome + ", cor=" + cor + ", idade=" + idade + "]";
	}
	
	/*public Gato (String nome, String cor, integer idade) {
		this.nome = nome;
		this.cor = cor;
		this.idade = idade;
	}*/
	
	

}
