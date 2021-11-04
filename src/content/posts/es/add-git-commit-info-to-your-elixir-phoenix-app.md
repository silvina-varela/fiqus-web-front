---
lang: es
type: "post"
title: "Add git commit info to your Elixir Phoenix app"
author: "Diego Calero"
slug: "/add-git-commit-info-to-your-elixir-phoenix-app"
date: "2019-07-15"
image:  experiencia-de-intercooperacion-header.jpg
imageCredits: "Créditos de imagen unsplash"
tags: ["Elixir", "Phoenix"]
---

Hi there! We’d like to share how to add git repo information to an Elixir application. In our use case, we wanted to add last commit hash and date to be displayed at Live Qchatex app footer, but it wasn’t as trivial as we expected.

The basic idea was to rely on git console commands to get the desired information:
