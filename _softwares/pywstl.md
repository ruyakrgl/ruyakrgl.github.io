---
layout: software
title: pywstl
date: 2026-02-18
image: /assets/images/pywstl.png
github: https://github.com/ruyakrgl/pywstl
favorite: true
---

# Python (Weighted) Signal Temporal Logic Library

A comprehensive Python library for constructing, evaluating, and optimizing **Weighted Signal Temporal Logic (WSTL)** formulas.

## Features
- **Weighted Robustness**: Quantitative semantics with weights. If weights are set to 1, reduces to standard STL robustness.
- **Dual Backends** with **Unified API**:
  - switch backends with a single call; all formula classes work identically across backends
  - Backends:
    - `numpy` (default): numpy robustness computation via `wstlpy`
    - `torch`: differentiable robustness via `wstltorch`, compatible with gradient-based optimization and cuda