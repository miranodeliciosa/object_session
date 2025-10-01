# Interactive Graph Network Demo

This is a demo of a non-hierarchical graph visualization using [vis-network](https://visjs.github.io/vis-network/), hosted on GitHub Pages.

## 🔗 Live Demo

👉 [View the interactive graph](https://yourusername.github.io/graph-network-demo/)

## 📁 Files

- `index.html`: Main page
- `graph.js`: JavaScript for loading and rendering the graph
- `data.json`: Graph data (nodes + edges)


```mermaid

flowchart TD
  A[Raw Data] --> B[MATLAB preprocessing SSVEP_ThreeMusk_preprocessing]
  B --> C[Epoch files .set and .epoch]
  C --> D[MATLAB TFA calculation SSVEP_ThreeMusk_Calc_TFA]
  D --> E[TFA Data]
  E --> F[MATLAB analysis SSVEP_ThreeMusk]
  F --> G[Outputs]

  G --> H[Figures PNG and TIF]
  G --> I[Tables CSV]

  I --> I1[SSVEP_peakvssideband.csv]
  I --> I2[SSVEP_mod_Gabor_timecourses_BL.csv]
  I --> I3[segment_data.csv]
  I --> I4[SSVEP_mod_Gabor_twin.csv]

  J[Additional inputs CSVs] --> K[R Markdown ThreeMusk_MethodsResults_newMethod2_final.Rmd]
  I --> K
  K --> L[Final Statistical Analysis and Figures]

  J --> J1[sample_demographics.csv]
  J --> J2[extracted_data.csv]
  J --> J3[DataTable.csv]



```
