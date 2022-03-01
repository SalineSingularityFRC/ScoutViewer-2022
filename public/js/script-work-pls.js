

        let data = [];
        let features = ["autoLowerHub","autoUpperHub","teleLowerHub","teleUpperHub","hanger"];
      
        let teamNames = ["5066", "5077"]
        //generate the data
        //data is an array of arrays of points (currently 3 arrays in data)
        let work = ""

        fetch("../js/final.json").then(async (resp) => {
            const asObject = await resp.json();
       
        
        for (var i = 0; i < teamNames.length; i++){
            
            var point = {}
            for(var j = 0; j < features.length; j++){
            
          
                
                point[features[j]] = asObject[0][teamNames[i]][features[j]]
                
               
            }
          
            data.push(point);
            
        }
    
       console.log(data);
      
        //define size of svg
        let svg;
        svg = d3.select("body").append("svg")
        .attr("width", 600)
        .attr("height", 600);

        //plot gridlines
        let radialScale = d3.scaleLinear()
        .domain([0,10])
        .range([0,250]);
        let ticks = [2,4,6,8,10];

        //add circles
        ticks.forEach(t =>
            svg.append("circle")
            .attr("cx", 300)
            .attr("cy", 300)
            .attr("fill", "none")
            .attr("stroke", "gray")
            .attr("r", radialScale(t))
        );

        //add numbers
        ticks.forEach(t =>
            svg.append("text")
            .attr("x", 305)
            .attr("y", 300 - radialScale(t))
            .text(t.toString())
        );

        //just some trig to get coords
        function angleToCoordinate(angle, value){
            let x = Math.cos(angle) * radialScale(value);
            let y = Math.sin(angle) * radialScale(value);
            return {"x": 300 + x, "y": 300 - y};
        }

        //plot radial lines
        for (var i = 0; i < features.length; i++) {
            let ft_name = features[i];
            let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            let line_coordinate = angleToCoordinate(angle, 10);
            let label_coordinate = angleToCoordinate(angle, 10.5);

            //draw axis line
            svg.append("line")
                .attr("x1", 300)
                .attr("y1", 300)
                .attr("x2", line_coordinate.x)
                .attr("y2", line_coordinate.y)
                .attr("stroke","black");

                //draw axis label
                svg.append("text")
                .attr("x", label_coordinate.x)
                .attr("y", label_coordinate.y)
                .text(ft_name);
            }

            //define the color used
            let line = d3.line()
                .x(d => d.x)
                .y(d => d.y);
                const curve = d3.line().curve(d3.curveNatural);

            //more coord calculation
            function getPathCoordinates(data_point){
            let coordinates = [];
            for (var i = 0; i < features.length; i++){
                let ft_name = features[i];
                let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
                coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
            }
            return coordinates;
        }

        let totalOpacity = .5 //anything over 1 will make multiple shapes opaque
        let color = "6495ED"

        //make colorWithAlpha
       let opacity = Math.round(Math.min(Math.max((totalOpacity / data.length) || 1, 0), 1) * 255);
        let colorWithAlpha = color + opacity.toString(16).toUpperCase();
        //console.log(colorWithAlpha)

        //make some lines from the data
        //const datalen = data.length
        
        for (var i = 0; i < data.length; i++){
           
            document.getElementById("work").innerHTML = "<h1>" + asObject[0][teamNames[i]].teamNum + "</h1>"
            let d = data[i];
            let coordinates = getPathCoordinates(d);

            //draw the path element
          
            svg
            .append("path")
            .datum(coordinates)
            .attr("d", line)
            .attr("fill", "#" + colorWithAlpha)
          
        
           
           
            //svg = d3.select("body").append("svg")
           // d3.select("body").select("svg").select("path").remove()
            await new Promise(r => setTimeout(r, 500));
            
        }

     
    })