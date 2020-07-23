---
title: 'P5.js Random Walk'
publishedon: "05 Jan 2021"
author: "Emanuel Benedic"
published: true
bannerimage: ../../images/banner.jpg
---

After attending the great talk "Con Canvas y a lo loco" by [Carmen Ansio](http://www.carmenansio.com/) that I had the opportunity to attend at Bilbostack conference, I wanted to try that cool library that I had been talking about: [P5.js](https://p5js.org/)

### And what is P5.js?

It is a library based on <strong>Processing</strong> and intended to make the code accessible to artists, students, beginners..., as advertised on its website. One of its many features is the ability to work with <strong>Canvas</strong> objects, as we will see in the example.

### What is a Random walk

A <strong>"random walk" or "random path"</strong> is a path drawn from random steps. [There are even works of art made from these paths](https://www.youtube.com/watch?v=QOkg0fJM5DQ). In the case of my example, I took advantage of the capabilities to generate <strong>points of any color on a canvas</strong> of the P5 library, to generate my random walk, which works as follows:

1. A random number is generated (in this case between 3 and 24), defining the number of points of the <strong>same color</strong> and in the **same direction** that the stroke will contain.
2. **8 possible directions** are defined: (North, Northeast, East, Southeast, South, Southwest, West, Northeast).
3. When changing the color, the initial one is taken into account to generate **random variations** from it.
4. In case a very **light color** is detected, the background of the **canvas** becomes **black**.