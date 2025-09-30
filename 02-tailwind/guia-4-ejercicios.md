# Guía de Ejercicios – Sesión práctica

**Tema:** Custom Hooks, Props, Listas, Objetos Literales e Interfaces

## Objetivo: Reforzar el uso de props, hooks personalizados, listas tipadas e interfaces en React con TailwindCSS.

### Ejercicio 1 – Contador con Hook Personalizado

Crea un **custom hook** `useCounter` que:

- Use un estado `count` (número).
- Exponga funciones `increment`, `decrement` y `reset`.

#### En `Counter.tsx`:

- Usa el hook.
- Muestra el valor de `count` en pantalla.
- Incluye **tres botones** (Sumar, Restar, Resetear) con estilos de Tailwind.

#### Pistas:

Puede utilizar el proyecto del contador de la guía 3 de TailwindCSS

## Ejercicio 2 – Lista de Tareas con Interfaz (20 min)

Crea un **custom hook** `useTask` que:

- Define la interfaz Task:

```ts
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

- Use un estado `tasks:Task[]`.
- Exponga lel atributo tasks
- Exponga funciones `addTask`, `removeTask` y `resetList`.

#### En `TaskList.tsx`:

- Implemente el useTask para manejar una lista inicial de 2 tareas.
- Renderiza la lista en un `<ul>`.
- Al dar clic en una tarea, alterna su estado (completed).
- Estiliza con Tailwind (line-through para completadas).
