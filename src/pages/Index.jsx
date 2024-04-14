import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, Spacer, IconButton, Checkbox, Divider } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" />
          <Button onClick={handleAddTodo} colorScheme="blue" px={8}>
            <FaPlus />
          </Button>
        </HStack>
        <VStack spacing={2} align="stretch">
          {todos.map((todo, index) => (
            <HStack key={index}>
              <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
              <Text textDecoration={todo.completed ? "line-through" : "none"} flexGrow={1}>
                {todo.text}
              </Text>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} size="sm" />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Divider my={8} />
      <Text>Total Todos: {todos.length}</Text>
      <Text>Completed Todos: {todos.filter((todo) => todo.completed).length}</Text>
    </Box>
  );
};

export default Index;
