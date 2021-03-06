
//Simple animated example of d3-cloud - https://github.com/jasondavies/d3-cloud
//Based on https://github.com/jasondavies/d3-cloud/blob/master/examples/simple.html

// Encapsulate the word cloud functionality
function wordCloud(selector) {
    var fill = d3.scale.category20();
    //Construct the word cloud's SVG element
    var svg = d3.select(selector).append("svg")
        .attr("width", 1000)
        .attr("height", 900)
        .append("g")
        .attr("transform", "translate(400,400)");


    //Draw the word cloud
    function draw(words) {
        var cloud = svg.selectAll("g text")
                       .data(words, function(d) { return d.text; })

        //Entering words
        cloud.enter()
            .append("text")
            .style("font-family", "Times New Roman")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr('font-size', 5)
            .text(function(d) { return d.text; });

        //Entering and existing words
        cloud
//            .size([1000, 1000])
            .transition()
                .duration(600)
                .style("font-size", function(d) { return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("fill-opacity", 1);

        //Exiting words
        cloud.exit()
            .transition()
                .duration(200)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 5)
                .remove();
    }


    //Use the module pattern to encapsulate the visualisation code. We'll
    // expose only the parts that need to be public.
    return {

        //Recompute the word cloud for a new set of words. This method will
        // asycnhronously call draw when the layout has been computed.
        //The outside world will need to call this function, so make it part
        // of the wordCloud return value.
        update: function(words) {
            d3.layout.cloud().size([900, 800])
                .words(words)
                .padding(8)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Times New Roman")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();
        }
    }

}

//Some sample data - http://en.wikiquote.org/wiki/Opening_lines
// var words = [
//     "You don't know about me without you have read a book called The Adventures of Tom Sawyer but that ain't no matter.",
//     "The boy with fair hair lowered himself down the last few feet of rock and began to pick his way toward the lagoon.",
//     "When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.",
//     "It was inevitable: the scent of bitter almonds always reminded him of the fate of unrequited love."
// ]
var words = [
"数字地球 可视化 数字地球 卷积神经网络 图像 可视分析系统 可解释性 遥感图像去云 自然语言处理 深度学习 自动文摘 开源 后端 前端 多模态 可视化 语义分割 雷达 显卡 超分辨 精细分类 爬虫 图布局 力导引 道路提取 压缩算法 专家系统 机器翻译 关系抽取 自编码器 模式识别 矩阵论 数据挖掘 信息论 图像识别 自然语言处理 细粒度分类 小样本学习 知识图谱 雷达辐射源指纹识别",

"坚持 累 睡不够 幸运 穷 平静 食堂涨价 消费降级 油泼面 实验室威武  重在参与  冲动  聚会 旅途 遗憾  任性 改变 探索 努力 长大 认真 充实 迷茫 感动 幸运 凉凉 锦鲤  科研 论文 奥森20公里 熬夜 困 ",

//"爱 家人 单身狗",
"tensorflow python qt 5G c++ vue stressmodel js d3 paper graph pytorch matlab gru kbqa pytorch cnn rnn lstm ImageCaption pytorch arXiv GitHub docker nlp t-SNE Letex keras python inception resnet GAN SRU BERT NLP STOA Gluon/Mxnet"
]

//Prepare one of the sample sentences by removing punctuation,
// creating an array of words and computing a random size attribute.
function getWords(i) {
    return words[i]
            .replace(/[!\.,:;\?]/g, '')
            .split(' ')
            .map(function(d) {
                return {text: d, size: 10 + Math.random() * 60};
            })
}

//This method tells the word cloud to redraw with a new set of words.
//In reality the new words would probably come from a server request,
// user input or some other source.
function showNewWords(vis, i) {
    i = i || 0;

    vis.update(getWords(i ++ % words.length))
    setTimeout(function() { showNewWords(vis, i + 1)}, 2000)
}

//Create a new instance of the word cloud visualisation.
var myWordCloud = wordCloud('#wordCloudBox-div');

//Start cycling through the demo data
showNewWords(myWordCloud);