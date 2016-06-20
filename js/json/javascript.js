var ask = [{
  '1': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">(<span style="color: #008000; font-weight: bold">function</span>(){<br>  <span style="color: #008000; font-weight: bold">var</span> topdev <span style="color: #666666">=</span> devvui <span style="color: #666666">=</span> <span style="color: #666666">3</span>;<br>})();<br>console.log(<span style="color: #BA2121">&quot;topdev defined? &quot;</span> <span style="color: #666666">+</span> (<span style="color: #008000; font-weight: bold">typeof</span> topdev <span style="color: #666666">!==</span> <span style="color: #BA2121">&#39;undefined&#39;</span>));<br>console.log(<span style="color: #BA2121">&quot;devvui defined? &quot;</span> <span style="color: #666666">+</span> (<span style="color: #008000; font-weight: bold">typeof</span> devvui <span style="color: #666666">!==</span> <span style="color: #BA2121">&#39;undefined&#39;</span>));<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">topdev defined<span style="color: #666666">?</span> <span style="color: #008000; font-weight: bold">false</span> <br>devvui defined<span style="color: #666666">?</span> <span style="color: #008000; font-weight: bold">true</span><br></pre>',
      'time': 2
    }
  ],
  '2': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> myTopdev <span style="color: #666666">=</span> {<br>    applancer<span style="color: #666666">:</span> <span style="color: #BA2121">&quot;bar&quot;</span>,<br>    func<span style="color: #666666">:</span> <span style="color: #008000; font-weight: bold">function</span>() {<br>        <span style="color: #008000; font-weight: bold">var</span> self <span style="color: #666666">=</span> <span style="color: #008000; font-weight: bold">this</span>;<br>        console.log(<span style="color: #BA2121">&quot;outer func:  this.applancer = &quot;</span> <span style="color: #666666">+</span> <span style="color: #008000; font-weight: bold">this</span>.applancer);<br>        console.log(<span style="color: #BA2121">&quot;outer func:  self.applancer = &quot;</span> <span style="color: #666666">+</span> self.applancer);<br>        (<span style="color: #008000; font-weight: bold">function</span>() {<br>            console.log(<span style="color: #BA2121">&quot;inner func:  this.applancer = &quot;</span> <span style="color: #666666">+</span> <span style="color: #008000; font-weight: bold">this</span>.applancer);<br>            console.log(<span style="color: #BA2121">&quot;inner func:  self.applancer = &quot;</span> <span style="color: #666666">+</span> self.applancer);<br>        }());<br>    }<br>};<br>myTopdev.func();<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"> outer func<span style="color: #666666">:</span>  <span style="color: #008000; font-weight: bold">this</span>.applancer <span style="color: #666666">=</span> bar<br> outer func<span style="color: #666666">:</span>  self.applancer <span style="color: #666666">=</span> bar<br> inner func<span style="color: #666666">:</span>  <span style="color: #008000; font-weight: bold">this</span>.applancer <span style="color: #666666">=</span> <span style="color: #008000; font-weight: bold">undefined</span><br> inner func<span style="color: #666666">:</span>  self.applancer <span style="color: #666666">=</span> bar<br></pre>',
      'time': 3
    }
  ],
  '3': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">(<span style="color: #008000; font-weight: bold">function</span>() {<br>    console.log(<span style="color: #666666">1</span>); <br>    setTimeout(<span style="color: #008000; font-weight: bold">function</span>(){console.log(<span style="color: #666666">2</span>)}, <span style="color: #666666">1000</span>); <br>    setTimeout(<span style="color: #008000; font-weight: bold">function</span>(){console.log(<span style="color: #666666">3</span>)}, <span style="color: #666666">0</span>); <br>    console.log(<span style="color: #666666">4</span>);<br>})();<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #666666">1</span><br><span style="color: #666666">4</span><br><span style="color: #666666">3</span><br><span style="color: #666666">2</span><br></pre>',
      'time': 1
    }
  ],
  '4': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> arr1 <span style="color: #666666">=</span> <span style="color: #BA2121">&quot;devvui&quot;</span>.split(<span style="color: #BA2121">&#39;&#39;</span>);<br><span style="color: #008000; font-weight: bold">var</span> arr2 <span style="color: #666666">=</span> arr1.reverse();<br><span style="color: #008000; font-weight: bold">var</span> arr3 <span style="color: #666666">=</span> <span style="color: #BA2121">&quot;topdev&quot;</span>.split(<span style="color: #BA2121">&#39;&#39;</span>);<br>arr2.push(arr3);<br>console.log(<span style="color: #BA2121">&quot;array 1: length=&quot;</span> <span style="color: #666666">+</span> arr1.length <span style="color: #666666">+</span> <span style="color: #BA2121">&quot; last=&quot;</span> <span style="color: #666666">+</span> arr1.slice(<span style="color: #666666">-1</span>));<br>console.log(<span style="color: #BA2121">&quot;array 2: length=&quot;</span> <span style="color: #666666">+</span> arr2.length <span style="color: #666666">+</span> <span style="color: #BA2121">&quot; last=&quot;</span> <span style="color: #666666">+</span> arr2.slice(<span style="color: #666666">-1</span>));</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">array <span style="color: #666666">1:</span> length<span style="color: #666666">=7</span> last<span style="color: #666666">=</span>t,o,p,d,e,v<br>array <span style="color: #666666">2:</span> length<span style="color: #666666">=7</span> last<span style="color: #666666">=</span>t,o,p,d,e,v<br></pre>',
      'time': 2
    }
  ],
  '5': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">console.log(<span style="color: #666666">1</span> <span style="color: #666666">+</span>  <span style="color: #BA2121">&quot;2&quot;</span> <span style="color: #666666">+</span> <span style="color: #BA2121">&quot;2&quot;</span>);<br>console.log(<span style="color: #666666">1</span> <span style="color: #666666">+</span>  <span style="color: #666666">+</span><span style="color: #BA2121">&quot;2&quot;</span> <span style="color: #666666">+</span> <span style="color: #BA2121">&quot;2&quot;</span>);<br>console.log(<span style="color: #666666">1</span> <span style="color: #666666">+</span>  <span style="color: #666666">-</span><span style="color: #BA2121">&quot;1&quot;</span> <span style="color: #666666">+</span> <span style="color: #BA2121">&quot;2&quot;</span>);<br>console.log(<span style="color: #666666">+</span><span style="color: #BA2121">&quot;1&quot;</span> <span style="color: #666666">+</span>  <span style="color: #BA2121">&quot;1&quot;</span> <span style="color: #666666">+</span> <span style="color: #BA2121">&quot;2&quot;</span>);<br>console.log( <span style="color: #BA2121">&quot;Applancer&quot;</span> <span style="color: #666666">-</span> <span style="color: #BA2121">&quot;TopDev&quot;</span> <span style="color: #666666">+</span> <span style="color: #BA2121">&quot;2&quot;</span>);<br>console.log( <span style="color: #BA2121">&quot;TopDev&quot;</span> <span style="color: #666666">-</span> <span style="color: #BA2121">&quot;DevVui&quot;</span> <span style="color: #666666">+</span> <span style="color: #666666">2</span>);<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #666666">122</span><br><span style="color: #666666">32</span><br><span style="color: #666666">02</span><br><span style="color: #666666">112</span><br>NaN2<br><span style="color: #008000; font-weight: bold">NaN</span></pre>',
      'time': 3
    }
  ],
  '6': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">console.log(<span style="color: #BA2121">&quot;0 || 1 = &quot;</span><span style="color: #666666">+</span>(<span style="color: #666666">0</span> <span style="color: #666666">||</span> <span style="color: #666666">1</span>));<br>console.log(<span style="color: #BA2121">&quot;1 || 2 = &quot;</span><span style="color: #666666">+</span>(<span style="color: #666666">1</span> <span style="color: #666666">||</span> <span style="color: #666666">2</span>));<br>console.log(<span style="color: #BA2121">&quot;0 &amp;&amp; 1 = &quot;</span><span style="color: #666666">+</span>(<span style="color: #666666">0</span> <span style="color: #666666">&amp;&amp;</span> <span style="color: #666666">1</span>));<br>console.log(<span style="color: #BA2121">&quot;1 &amp;&amp; 2 = &quot;</span><span style="color: #666666">+</span>(<span style="color: #666666">1</span> <span style="color: #666666">&amp;&amp;</span> <span style="color: #666666">2</span>));</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #666666">0</span> <span style="color: #666666">||</span> <span style="color: #666666">1</span> <span style="color: #666666">=</span> <span style="color: #666666">1</span><br><span style="color: #666666">1</span> <span style="color: #666666">||</span> <span style="color: #666666">2</span> <span style="color: #666666">=</span> <span style="color: #666666">1</span><br><span style="color: #666666">0</span> <span style="color: #666666">&amp;&amp;</span> <span style="color: #666666">1</span> <span style="color: #666666">=</span> <span style="color: #666666">0</span> <br><span style="color: #666666">1</span> <span style="color: #666666">&amp;&amp;</span> <span style="color: #666666">2</span> <span style="color: #666666">=</span> <span style="color: #666666">2</span></pre>',
      'time': 1
    }
  ],
  '7': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> a<span style="color: #666666">=</span>{}, b<span style="color: #666666">=</span>{key<span style="color: #666666">:</span><span style="color: #BA2121">&#39;b&#39;</span>}, c<span style="color: #666666">=</span>{key<span style="color: #666666">:</span><span style="color: #BA2121">&#39;c&#39;</span>};<br>a[b]<span style="color: #666666">=123</span>;<br>a[c]<span style="color: #666666">=456</span>;<br>console.log(a[b]);</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #666666">456</span></pre>',
      'time': 1
    }
  ],
  '8': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">(<span style="color: #008000; font-weight: bold">function</span>(x) {<br>    <span style="color: #008000; font-weight: bold">return</span> (<span style="color: #008000; font-weight: bold">function</span>(y) {<br>        console.log(x);<br>    })(<span style="color: #666666">2</span>)<br>})(<span style="color: #666666">1</span>);<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #666666">1</span></pre>',
      'time': 1
    }
  ],
  '9': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> topdev <span style="color: #666666">=</span> {<br>    _name<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;Applancer DevVui TopDev&#39;</span>,<br>    getNameOfCompany<span style="color: #666666">:</span> <span style="color: #008000; font-weight: bold">function</span> (){<br>        <span style="color: #008000; font-weight: bold">return</span> <span style="color: #008000; font-weight: bold">this</span>._name;<br>    }<br>};<br><span style="color: #008000; font-weight: bold">var</span> mobileday <span style="color: #666666">=</span> topdev.getNameOfCompany;<br>console.log(mobileday());<br>console.log(topdev.getNameOfCompany());<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">undefined</span><br>Applancer DevVui TopDev<br></pre>',
      'time': 1
    }
  ],
  '10': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> Employee <span style="color: #666666">=</span> {<br>  company<span style="color: #666666">:</span> <span style="color: #BA2121">&#39;Applancer&#39;</span><br>}<br><span style="color: #008000; font-weight: bold">var</span> emp1 <span style="color: #666666">=</span> <span style="color: #008000">Object</span>.create(Employee);<br><span style="color: #008000; font-weight: bold">delete</span> emp1.company<br>console.log(emp1.company);</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%"><span style="color: #BA2121">&#39;Applancer&#39;</span></pre>',
      'time': 1
    }
  ],
}];

