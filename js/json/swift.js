var ask = [{
  '1': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let str <span style="color: #666666">=</span> <span style="color: #BA2121">&quot;MD&quot;</span><br><span style="color: #008000; font-weight: bold">var</span> result <span style="color: #666666">=</span> <span style="color: #666666">0</span><br>func <span style="color: #0000FF">getCharCode</span>(<span style="color: #B00040">char</span><span style="color: #666666">:</span>Character) <span style="color: #666666">-&gt;</span> Int {<br>    let scalars <span style="color: #666666">=</span> <span style="color: #008000">String</span>(<span style="color: #B00040">char</span>).unicodeScalars<br>    <span style="color: #008000; font-weight: bold">return</span> <span style="color: #0000FF">Int</span>(scalars[scalars.startIndex].value)<br>}<br><span style="color: #008000; font-weight: bold">for</span> character <span style="color: #008000; font-weight: bold">in</span> str.characters {<br>    result <span style="color: #666666">+=</span> <span style="color: #0000FF">getCharCode</span>(character)<br>}<br><span style="color: #0000FF">print</span>(result)<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">145</pre>',
      'time': 2
    }
  ],
  '2': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let numbers <span style="color: #666666">=</span> <span style="color: #666666">1.</span>.<span style="color: #666666">.20</span><br>let total <span style="color: #666666">=</span> numbers.filter { $0 <span style="color: #666666">%</span> <span style="color: #666666">2</span> <span style="color: #666666">==</span> <span style="color: #666666">0</span> }.<span style="color: #0000FF">reduce</span>(<span style="color: #666666">0</span>,combine<span style="color: #666666">:</span> <span style="color: #666666">+</span>)<br><span style="color: #0000FF">print</span>(total)</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">110</pre>',
      'time': 3
    }
  ],
  '3': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let numbers <span style="color: #666666">=</span> <span style="color: #666666">1.</span>.<span style="color: #666666">.10</span><br>let total <span style="color: #666666">=</span> numbers.<span style="color: #0000FF">reduce</span>(<span style="color: #666666">0</span>,combine<span style="color: #666666">:</span> <span style="color: #666666">+</span>)<br><span style="color: #0000FF">print</span>(total)<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">55</pre>',
      'time': 1
    }
  ],
  '4': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> n <span style="color: #666666">=</span> <span style="color: #666666">12345</span><br><span style="color: #008000; font-weight: bold">var</span> m <span style="color: #666666">=</span> <span style="color: #666666">0</span><br><span style="color: #008000; font-weight: bold">while</span> (n <span style="color: #666666">&gt;</span> <span style="color: #666666">0</span>) {<br>    m <span style="color: #666666">+=</span> n <span style="color: #666666">%</span> <span style="color: #666666">10</span><br>    n <span style="color: #666666">=</span> <span style="color: #0000FF">Int</span>(n<span style="color: #666666">/10</span>)<br>}<br><span style="color: #0000FF">print</span>(m)<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">15</pre>',
      'time': 2
    }
  ],
  '5': [
    {
      'question': '<pre style="margin: 0; line-height: 125%"><span style="color: #008000; font-weight: bold">var</span> n <span style="color: #666666">=</span> <span style="color: #666666">12345</span><br><span style="color: #008000; font-weight: bold">var</span> m <span style="color: #666666">=</span> <span style="color: #666666">0</span><br><span style="color: #008000; font-weight: bold">while</span> (n <span style="color: #666666">&gt;</span> <span style="color: #666666">0</span>) {<br>    m <span style="color: #666666">=</span> (m <span style="color: #666666">*</span> <span style="color: #666666">10</span>) <span style="color: #666666">+</span> (n <span style="color: #666666">%</span> <span style="color: #666666">10</span>)<br>    n <span style="color: #666666">=</span> <span style="color: #0000FF">Int</span>(n<span style="color: #666666">/10</span>)<br>}<br><span style="color: #0000FF">print</span>(m)</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">54321</pre>',
      'time': 3
    }
  ],
  '6': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let numbersArr <span style="color: #666666">=</span> [<span style="color: #666666">1</span>,<span style="color: #666666">3</span>,<span style="color: #666666">5</span>,<span style="color: #666666">7</span>,<span style="color: #666666">9</span>,<span style="color: #666666">11</span>]<br><span style="color: #008000; font-weight: bold">var</span> foundIndex <span style="color: #666666">=</span> <span style="color: #666666">0</span><br><span style="color: #008000; font-weight: bold">for</span> n <span style="color: #008000; font-weight: bold">in</span> numbersArr {<br>    <span style="color: #008000; font-weight: bold">if</span> n <span style="color: #666666">==</span> <span style="color: #666666">7</span> { <span style="color: #008000; font-weight: bold">break</span> }<br>    foundIndex <span style="color: #666666">+=</span> <span style="color: #666666">1</span><br>}<br><span style="color: #0000FF">print</span>(foundIndex)<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">3</pre>',
      'time': 3
    }
  ],
  '7': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let myStr <span style="color: #666666">=</span> <span style="color: #BA2121">&quot;topdev&quot;</span><br>let newStr <span style="color: #666666">=</span> <span style="color: #008000">String</span>(myStr.characters.<span style="color: #0000FF">reverse</span>()).capitalizedString</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">Vedpot</pre>',
      'time': 1
    }
  ],
  '8': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let nums <span style="color: #666666">=</span> [<span style="color: #666666">3</span>, <span style="color: #666666">5</span>]<br><span style="color: #008000; font-weight: bold">var</span> total <span style="color: #666666">=</span> <span style="color: #666666">0</span><br><span style="color: #008000; font-weight: bold">var</span> i <span style="color: #666666">=</span> <span style="color: #666666">0</span><br><span style="color: #008000; font-weight: bold">for</span> _ <span style="color: #008000; font-weight: bold">in</span> <span style="color: #666666">1.</span>.<span style="color: #666666">.5</span> {<br>    total <span style="color: #666666">+=</span> nums[i]<br>    i <span style="color: #666666">=</span> <span style="color: #666666">1</span> <span style="color: #666666">-</span> i<br>}<br><span style="color: #0000FF">print</span>(total)<br></pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">19</pre>',
      'time': 1
    }
  ],
  '9': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let string <span style="color: #666666">=</span> <span style="color: #BA2121">&quot;Topdev.VietnamMobileDay&quot;</span><br>let needle<span style="color: #666666">:</span> Character <span style="color: #666666">=</span> <span style="color: #BA2121">&quot;.&quot;</span><br><span style="color: #008000; font-weight: bold">if</span> let idx <span style="color: #666666">=</span> string.characters.<span style="color: #0000FF">indexOf</span>(needle) {<br>    let pos <span style="color: #666666">=</span> string.startIndex.<span style="color: #0000FF">distanceTo</span>(idx)<br>    <span style="color: #0000FF">print</span>(<span style="color: #BA2121">&quot;Position \(pos)&quot;</span>)<br>}<br><span style="color: #008000; font-weight: bold">else</span> {<br>    <span style="color: #0000FF">print</span>(<span style="color: #BA2121">&quot;Not found&quot;</span>)<br>}</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">Position 6</pre>',
      'time': 1
    }
  ],
  '10': [
    {
      'question': '<pre style="margin: 0; line-height: 125%">let n1 <span style="color: #666666">=</span> <span style="color: #666666">0xff</span><br><span style="color: #0000FF">print</span>(n1)</pre>',
      'answer': '<pre style="margin: 0; line-height: 125%">255</pre>',
      'time': 1
    }
  ],
}];

