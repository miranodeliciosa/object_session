fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('network');
    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        color: {
          border: '#000',
          background: '#00aced'
        },
        font: { size: 14 }
      },
      edges: {
        arrows: 'to',
        color: { color: '#999' },
        smooth: true
      },
      physics: {
        stabilization: true
      }
    };

    const network = new vis.Network(container, data, options);

    network.on("click", function (params) {
      if (params.nodes.length) {
        const nodeId = params.nodes[0];
        const nodeLabel = data.nodes.find(n => n.id == nodeId)?.label;
        alert(`You clicked: ${nodeLabel}`);
      }
    });
  });