import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoHeader from "./components/TodoHeader";
import "./App.css";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
      count: 0,
    };
  }

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput.trim() !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
        check: false,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    } else {
      // alert("listeye bos ekleme yapilamaz")
      //bu kismi daha sonraya birakmak zorundayim
    }
  };
  deleteItem = (id) => {
    this.state.todos.map((item, index) => {
      if (item.id === id) {
        if (item.check) {
          this.setState({ count: this.state.count - 1 });
        }
        this.state.todos.splice(index, 1);
        this.setState({
          todos: this.state.todos,
        });
      }
    });
  };
  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };
  checked = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((item, index) => {
        if (item.id === id) {
          prevState.todos[index].check = !item.check;
          if (item.check) {
            this.setState({ count: this.state.count + 1 });
          } else {
            this.setState({ count: this.state.count - 1 });
          }
        }
        return prevState.todos[index];
      }),
    }));
  };
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
  }
  render() {
    return (
      <div className="App">
        <TodoHeader />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList
              todos={this.state.todos}
              deleteItem={this.deleteItem}
              checked={this.checked}
            />
          </div>
        )}
        <h4 className="counter">
          {`${this.state.todos.length} Görevden ${this.state.count} tanesi yapıldı.`}
        </h4>
        <h4 className="counter">
          {" "}
          {this.state.todos.length === this.state.count &&
          this.state.todos.length > 0
            ? `Bütün işler bitmiş görünüyor :)`
            : ""}
        </h4>
      </div>
    );
  }
}

export default App;
