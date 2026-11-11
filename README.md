# 🥁 Bateria Virtual | Drum Pad

Um projeto interativo de **bateria virtual desenvolvido com HTML, CSS e JavaScript**, no qual é possível tocar sons pelo teclado e criar pequenas sequências rítmicas para reprodução automática.

A ideia é simples: **cada tecla representa um som**, e os pads ganham destaque visual sempre que são acionados.

## 📸 Prévia do projeto
### Tela inicial
<img width="437" height="411" alt="image" src="https://github.com/user-attachments/assets/28c84584-879e-4aa7-934f-e0c9ceb37927" />

### Composição sendo reproduzida
<img width="377" height="155" alt="image" src="https://github.com/user-attachments/assets/76b69d0e-d54e-4b95-91b9-ef2fcc68285f" />

## ✨ Funcionalidades

- 🎹 **Nove pads interativos**, associados às teclas `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X` e `C`.
- 🔊 **Reprodução de arquivos de áudio `.wav`** para simular diferentes sons de bateria.
- 💡 **Feedback visual** ao acionar cada pad.
- 📝 **Campo de composição** para digitar uma sequência de notas.
- ▶️ **Reprodução automática** da composição ao clicar em **Tocar**.
- ⏸️ **Pausas entre notas** usando espaços na sequência.
- 🎨 **Interface com pads organizados em grade**, estilizada com CSS.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página e organização dos pads.
- **CSS3** — identidade visual, posicionamento e efeitos.
- **JavaScript** — eventos de teclado, controle dos sons, animações e reprodução das sequências.

Tudo feito com **JavaScript puro (Vanilla JS)**, sem frameworks ou bibliotecas externas.

## 🎮 Como utilizar

1. Abra o arquivo `index.html` no navegador.

2. Pressione uma das teclas disponíveis (`Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`) para tocar um som.

3. Para criar uma composição, digite uma sequência no campo de texto, por exemplo:

   `qwe asd zxc`

4. Clique em **Tocar** e acompanhe a reprodução automática dos sons e os destaques visuais.

**Dica:** cada caractere ocupa uma posição na sequência. Um **espaço** representa uma pausa no ritmo, enquanto as notas são agendadas em intervalos de **500 ms**.

## 📁 Estrutura do projeto

```text
bateria-virtual/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── keyq.wav
│   ├── keyw.wav
│   ├── keye.wav
│   ├── keys.wav
│   ├── keyd.wav
│   ├── keyz.wav
│   ├── keyx.wav
│   └── keyc.wav
```

## 🚀 Executando localmente

Não é necessário instalar dependências nem configurar um servidor para o funcionamento básico do projeto:

1. Baixe ou clone o repositório.
2. Confira se a pasta `assets/` contém os áudios.
3. Abra `index.html` em um navegador moderno.
4. Interaja com os pads ou monte uma composição.

## 🧠 Conceitos praticados

Este projeto foi desenvolvido para praticar fundamentos de desenvolvimento web, como:

- Manipulação do DOM com `querySelector()` e `getElementById()`.
- Eventos com `addEventListener()`.
- Laços de repetição com `for`.
- Agendamento assíncrono com `setTimeout()`.
- Objetos JavaScript e acesso dinâmico a propriedades.
- Reprodução de áudio com `new Audio()` e `.play()`.
- Integração entre HTML, CSS e JavaScript.

## 🔮 Possíveis melhorias

- [ ] Controle de velocidade da composição (BPM).
- [ ] Botão para interromper a reprodução.
- [ ] Gravação das notas tocadas em tempo real.
- [ ] Salvar e carregar composições.
- [ ] Permitir sobreposição de sons ao pressionar a mesma tecla rapidamente.

## 👨‍💻 Autor

Desenvolvido por [**gabriel-s-pereira**](https://github.com/Gabriel-s-pereira).

---

⭐ Se gostou do projeto, considere deixar uma estrela no repositório!
