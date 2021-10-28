---
lang: en
type: "post"
title: "Introduction to functional programming"
author: "Nicolás Dimarco"
slug: "/introduction-to-functional-programming"
date: "2021-08-01"
image:  articleImg.png
imageCredits: "Créditos de imagen unsplash"
tags: ["Erlang", "Elixir", "Functional programming", "Miranda"]
---

En Fiqus tenemos programadores a los que aparte de programar imperativamente, nos gusta y nos motiva programar funcionalmente.

##¿Qué es la programación funcional?

Es un paradigma de programación declarativa basado en el uso de funciones matemáticas.

Desmenuzando conceptos…

La programación funcional genera un código lindo y declarativo -se lee y se entiende lo que hace-.

La diferencia entre una función matemática y «función» utilizada en programación imperativa es que esta última mencionada puede tener efectos secundarios (side-effects), como cambiar el valor de variables globales o pasadas por referencia. Al eliminar dichos efectos secundarios, en la programación funcional, se puede entender y predecir el funcionamiento de un programa más fácilmente, porque una función que se invoca con los mismos parámetros siempre va a retornar el mismo resultado.

Podemos nombrar algunos lenguajes de programación funcionales que ya tienen buena historia recorrida, como lo son Haskell, Miranda y Erlang. También algunos más nuevos como lo son Clojure y Elixir.

Vale la pena destacar que algunos lenguajes utilizan lazy evaluation, como Haskell y Miranda, donde cada expresión y argumento será evaluado a medida que se necesite, o sea, que algunos argumentos quizás nunca sean evaluados; en cambio otros utilizan eager evaluation, como Erlang y la mayoría de los lenguajes imperativos, donde las expresiones y parámetros se evalúan al momento que se asignan.

