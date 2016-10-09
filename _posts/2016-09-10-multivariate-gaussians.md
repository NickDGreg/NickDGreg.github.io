---
layout: post
title: Multivariate Gaussian Distributions - intuition and background knowledge
---

After reading the description of multivariate Gaussian distributions and the derivations of the marginal and conditional distributions in Christopher Bishops Pattern Recognition and Machine Learning, I've collected a few of the resources that make the mathematics of these concepts easier to understand.

[This description of multivariate Gaussians from Stanford](http://cs229.stanford.edu/section/more_on_gaussians.pdf) provides more detail than Bishop, allowing the reader to see more of the mathematical steps involved.


[This description from Stanford](http://cs229.stanford.edu/notes/cs229-notes2.pdf#page=2) provides a number of graphs that help give a feeling for the mathematics and multivariate Gaussians.

###Background Knowledge
It may be that you struggle to understand some of the concepts or follow some of the mathematical steps because you are missing some underlying background knowledge.

Here are some links to various concepts required to understand the descriptions of multivariate Gaussian distributions. They are listed from specific resources which describe individual topics to more basic information which may not be directly mentioned in the descriptions of multivariate Gaussians thus making it harder to find.

Its up to you to identify what exactly it is that is causing you confusion so that you can effectively fill in your knowledge gaps.

Covariance matrices are a key part of multivariate Gaussians, [this visual description](http://www.visiondummy.com/2014/04/geometric-interpretation-covariance-matrix/) provides an intuition for what a covariance matrix is and how changes in it would alter the shaped and therefore probabilities of the multivariate distribution.


This video from Khan academy describes the matrix form of a quadratic equation. Knowing this piece of linear algebra helps understand how the formula for the multivariate Gaussian relates to the [Gaussian distribution](https://www.google.co.uk/search?q=normal+distribution+formula&safe=off&espv=2&biw=734&bih=765&source=lnms&tbm=isch&sa=X&ved=0ahUKEwja89i6yM3PAhVBDcAKHXrtA1wQ_AUIBigB&dpr=1.25#imgrc=_) that you have come across for single variable distributions.

The matrix form of the quadratic equation is also important in understanding the derivations for the marginal and conditional distributions of the multivariate Gaussian.

Another vital part of the derivations of the marginal and conditional distributions is [completing the square](https://www.mathsisfun.com/algebra/completing-square.html).

Understanding [matrix algebra](https://www.adelaide.edu.au/mathslearning/bridging/resources/MT2MatricesBook_Feb2013.pdf#page=13) is needed to be able to follow the steps of the derivations for conditional and marginal Gaussians.

For more linear algebra Sas provide a good [overview of the topics and linear algebra](https://www.sas.com/storefront/aux/en/spmultdatared/56902_excerpt.pdf) required for multivariate statistics in general

For an overview of all of the topics that underlie multivariate Gaussians see the endlessly useful [metacademy](https://metacademy.org/graphs/concepts/multivariate_gaussian_distribution#focus=xub4wekq&mode=explore) (Clicking the list icon in the top left under learning plan lets you see more useful resources).

Hope these help! If you're still stuck, attempt to identify exactly what it is that you don't understand, really narrow it down as much as possible. Then from there you should be able find resources that enable you to understand that step or ask your question on [StackExchange Cross Validated](http://stats.stackexchange.com/).
