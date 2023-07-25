import React, { useState } from 'react';
import './App.css';
import { marked } from 'marked';



function App() {
  const [inputText, setInputText] = useState(`# Heading (H1 size)
  ## Subheading (H2 size)
  [Link](https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-6.jpg?resize=700,700)

  \`Inline code\`
  \`\`\`
  // Code block
  const example = "Hello World";
  console.log(example);
  \`\`\`
  - List item 1
  - List item 2

  > Blockquote

  ![Image](https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-6.jpg?resize=100,100)

  **Bold text**`);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const getMarkdownText = () => {
    return { __html: marked(inputText) };
  };

  return (
    <div>
      <div id="app">

        <div className="markdown">
          <label htmlFor="editor" className="title">Editor</label>
          <textarea
            className="text"
            id="editor"
            type="text"
            name="editor"
            rows="10" cols="50"
            value={inputText}
            onChange={handleInputChange}>

          </textarea>
        </div>
      </div>
      <div className="previewer">
        <div className="title">Preview</div>
        <div className="text" id="preview" dangerouslySetInnerHTML={getMarkdownText()}>
        </div>
      </div>
    </div>
  )
}

export default App;
