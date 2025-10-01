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

    A[Raw Data] -->|MATLAB: SSVEP_ThreeMusk_preprocessing| B[set + epoch files]
    B -->|MATLAB: SSVEP_ThreeMusk_Calc_TFA| C[TFA Data]
    C -->|MATLAB: SSVEP_ThreeMusk (plot & analyze)| D[Outputs]

    D --> D1[Figures: PNG/TIF]
    D1 --> D1a[SPECTRA_Evoked_GrandMean.png]
    D1 --> D1b[Topo_allfreq_alltimewin_allBaseline.png]
    D1 --> D1c[LatencySSVEP_Figure.tif]

    D --> D2[Tables: CSV]
    D2 --> D2a[SSVEP_peakvssideband.csv]
    D2 --> D2b[SSVEP_mod_Gabor_timecourses_BL.csv]
    D2 --> D2c[segment_data.csv]
    D2 --> D2d[SSVEP_mod_Gabor_twin.csv]

    E[Additional CSV inputs: demographics & behavior] --> F[R: ThreeMusk_MethodsResults_newMethod2_final.Rmd]
    D --> F
    F --> G[Final Statistical Analysis + Figures]

    E --> E1[sample_demographics.csv]
    E --> E2[extracted_data.csv]
    E --> E3[DataTable.csv]

```
