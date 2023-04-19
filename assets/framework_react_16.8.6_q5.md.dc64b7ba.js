import{_ as e,o as s,c as n,O as a}from"./chunks/framework.64ff6dc7.js";const t="/assets/react-t1.png",l="/assets/react-t2.png",o="/assets/react-t3.png",D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"framework/react/16.8.6/q5.md","lastUpdated":1681906497000}'),i={name:"framework/react/16.8.6/q5.md"},p=a(`<h2 id="requestcurrenttime" tabindex="-1">requestCurrentTime <a class="header-anchor" href="#requestcurrenttime" aria-label="Permalink to &quot;requestCurrentTime&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">requestCurrentTime</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">isRendering</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// We&#39;re already rendering. Return the most recently read time.</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentSchedulerTime</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">findHighestPriorityRoot</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">nextFlushedExpirationTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">NoWork</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">nextFlushedExpirationTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Never</span></span>
<span class="line"><span style="color:#F07178;">  ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">recomputeCurrentRendererTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">currentSchedulerTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentRendererTime</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentSchedulerTime</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentSchedulerTime</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">recomputeCurrentRendererTime</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentTimeMs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">now</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">originalStartTimeMs</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">currentRendererTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">msToExpirationTime</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">currentTimeMs</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>首先是:</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (isRendering) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentSchedulerTime</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这个isRendering只有在performWorkOnRoot的时候才会被设置为true，而其本身是一个同步的方法，不存在他执行到一半没有设置isRendering为false的时候就跳出，那么什么情况下会在这里出现新的requestCurrentTime呢？</p><ul><li>在生命周期方法中调用了setState</li><li>需要挂起任务的时候</li></ul><p>也就是说 React 要求<strong>在一次rendering过程中，新产生的update用于计算过期时间的current必须跟目前的renderTime保持一致，同理在这个周期中所有产生的新的更新的过期时间都会保持一致！</strong></p><p>然后第二个判断：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  nextFlushedExpirationTime </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> NoWork </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;">  nextFlushedExpirationTime </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Never</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>也就是说在一个batched更新中，只有第一次创建更新才会重新计算时间，后面的所有更新都会复用第一次创建更新的时候的时间，这个也是为了<strong>保证在一个批量更新中产生的同类型的更新只会有相同的过期时间</strong></p><h2 id="各种不同的-expirationtime" tabindex="-1">各种不同的 expirationTime <a class="header-anchor" href="#各种不同的-expirationtime" aria-label="Permalink to &quot;各种不同的 expirationTime&quot;">​</a></h2><p>在 React 的调度过程中存在着非常多不同的_expirationTime_变量帮助 React 去实现在单线程环境中调度不同优先级的任务这个需求，这篇文章我们就来一一列举他们的含义以及作用，来帮助我们更好得理解 React 中的整个调度过程。</p><ul><li>root.expirationTime</li><li>root.nextExpirationTimeToWorkOn</li><li>root.childExpirationTime</li><li>root.earliestPendingTime &amp; root.lastestPendingTime</li><li>root.earliestSuspendedTime &amp; root.lastestSuspendedTime</li><li>root.lastestPingedTime</li><li>nextFlushedExpirationTime</li><li>nextLatestAbsoluteTimeoutMs</li><li>currentRendererTime</li><li>currentSchedulerTime</li></ul><p>另外，所有节点都会具有expirationTime和childExpirationTime两个属性<br>以上所有值初始都是NoWork也就是0，以及他们一共会有三种情况：</p><ul><li>NoWork，代表没有更新</li><li>Sync，代表同步执行，不会被调度也不会被打断</li><li>async模式下计算出来的过期时间，一个时间戳</li></ul><p>接下去的例子我们都会根据下面的例子结构来讲，我们假设有如下结构的一个 React 节点树，他的Fiber结构如下：<br><img src="`+t+'" alt="image.png"><br>后续我们会在这个基础上讲解不同情况下expirationTime的情况</p><h2 id="childexpirationtime" tabindex="-1">childExpirationTime <a class="header-anchor" href="#childexpirationtime" aria-label="Permalink to &quot;childExpirationTime&quot;">​</a></h2><p>在之前我们说过，每次一个节点调用setState或者forceUpdate都会产生一个更新并且计算一个expirationTime，那么这个节点的expirationTime就是当时计算出来的值，<strong>因为这个更新本身就是由这个节点产生的</strong><br>最终因为 React 的更新需要从FiberRoot开始，所以会执行一次向上遍历找到FiberRoot，而向上遍历则正好是一步步找到<strong>创建更新的节点的父节点</strong>的过程，这时候 React 就会对每一个该节点的父节点链上的节点设置childExpirationTime，因为这个更新是他们的子孙节点造成的<br><img src="'+l+'" alt="image.png"></p><p>如上图所示，我们先忽略最左边的child1产生的一次异步更新，如果当前只有child2产生了一个Sync更新，那么App和FiberRoot的childExpirationTime都会更新成Sync</p><p>那么这个值有什么用呢？在我们向下更新整棵Fiber树的时候，每个节点都会执行对应的update方法，在这个方法里面就会使用节点本身的expirationTime和childExpirationTime来判断他是否可以直接跳过，不更新子树。<strong>expirationTime代表他本身是否有更新，如果他本身有更新，那么他的更新可能会影响子树；childExpirationTime表示他的子树是否产生了更新；如果两个都没有，那么子树是不需要更新的。</strong><br>对应图中，如果child1，child3，child4还有子树，那么在这次child2的更新中，他们是不需要重新渲染的，在遍历到他们的时候，会直接跳过<br><em>注意：这里只讨论没有其他副作用的情况，比如使用老的context api之类的最终会强制导致没有更新的组件重新渲染的情况我们先不考虑。</em></p><p>了解了childExpirationTime的作用之后，我们再来讲一下他的特性：</p><ul><li>同一个节点产生的连续两次更新，最红在父节点上只会体现一次childExpirationTime</li><li>不同子树产生的更新，最终体现在跟节点上的是优先级最高的那个更新</li></ul><p>第一点很好理解，同一个节点在第一次更新还没有结束的情况下再次产生更新，那么不管他们优先级哪个高，最终都会按照高优先级那个过期时间把所有更新都更新掉了，因为Fiber对象只有一个，updateQueue也只有一个，无法区分同一个对象上连续的不同更新。<br>第二点是因为 React 在创建更新向上寻找root并设置childExpirationTime的时候，会对比之前设置过的和现在的，最终会等于<strong>非NoWork的最大的childExpirationTime，因为expirationTime越大优先级越高，Sync是最高优先级</strong></p><p>对应到上面的例子中，child1产生的更新是异步的，所以他的expirationTime是计算出来的时间戳，那么肯定比Sync小，所以率先记录到父节点的是child2，同时也是child2的更新先被执行。<strong>即便是child1的更新先产生，如果他在chidl2产生更新的时候他还没更新完，那么也会被打断，先完成child2的渲染，再回头来渲染child1</strong><br>以上是childExpirationTime的作用和特性，他在每个节点completeWork的时候会reset父链上的childExpirationTime，也就是说这个节点已经更新完了，那么他的childExpirationTime也就没有意义了。那么这个在复习讲节点更新的时候会讲到，到时候再对应起来看效果会更好。</p><h2 id="earliestpendingtime-lastestpedingtime" tabindex="-1">earliestPendingTime &amp; lastestPedingTime <a class="header-anchor" href="#earliestpendingtime-lastestpedingtime" aria-label="Permalink to &quot;earliestPendingTime &amp; lastestPedingTime&quot;">​</a></h2><p>在FiberRoot上有两个值earliestPendingTime和lastestPedingTime，他们是一对值，<strong>用来记录所有子树中需要进行渲染的更新的expirationTime的区间</strong><br><img src="'+o+`" alt="image.png"><br>在这个例子里，我们同时在child1、child2、child3产生里更新，并且根据优先级计算出了不同的更新时间（<strong>再次重申，请忽略细节，现实中不太会出现同时产生的情况</strong>）。</p><p>每个更新创建的时候，React 会通过markPendingPriorityLevel标记root节点的earliestPendingTime和lastestPedingTime。他们只记录区间，也就是说现在我们产生了三个不同的过期时间，但是这里只记录最大和最小的。</p><p>那么他的作用就很明显了，<strong>通过追踪最大和最小值，React 可以判断在当前更新之后是否还具有优先级更低的任务需要执行（当前过期时间处理这两个值之间）。</strong></p><h2 id="earliestsuspendedtime-lastestsuspendedtime" tabindex="-1">earliestSuspendedTime &amp; lastestSuspendedTime <a class="header-anchor" href="#earliestsuspendedtime-lastestsuspendedtime" aria-label="Permalink to &quot;earliestSuspendedTime &amp; lastestSuspendedTime&quot;">​</a></h2><p>同样的在ReactFiber上有两个值earliestSuspendedTime和lastestSuspendedTime，<strong>这两个值是用来记录被挂起的任务的过期时间的</strong></p><p>首先我们定义一下什么情况下任务是被挂起的：</p><ul><li>出现可捕获的错误并且还有优先级更低的任务的情况下</li><li>当捕获到thenable，并且需要设置onTimeout的时候</li></ul><p>我们称这个任务被suspended(挂起)了。记录这个时间主要是在resolve了promise之后，判断被挂起的组件更新是否依然处于目前已有的suspenedTime中间，如果不是的话是需要重新计算一个新的过期时间，然后从新加入队列进行调度更新的。另外就是在确定目前需要执行的任务的过期时间，也就是root.expirationTime和root.nextExpirationTimeToWorkOn的时候也是一个考虑因素。</p><h2 id="lastestpingedtime" tabindex="-1">lastestPingedTime <a class="header-anchor" href="#lastestpingedtime" aria-label="Permalink to &quot;lastestPingedTime&quot;">​</a></h2><p>这个值是用来记录最新的一次suspended组件resolve之后，如果挂起之前的expirationTime依然在earliestSuspendedTime和lastestSuspendedTime之间，则会标志这个时间为pingedTime</p><p>pingedTime目前看来没有什么别的作用，唯一跟suspendedTime的区别是他的优先级比suspendedTime高一些，会优先选择为渲染目标。</p><h2 id="root-expirationtime-root-nextexpirationtimetoworkon" tabindex="-1">root.expirationTime &amp; root.nextExpirationTimeToWorkOn <a class="header-anchor" href="#root-expirationtime-root-nextexpirationtimetoworkon" aria-label="Permalink to &quot;root.expirationTime &amp; root.nextExpirationTimeToWorkOn&quot;">​</a></h2><p>root.expirationTime是用来标志当前渲染的过期时间的，请注意他只管本渲染周期，他并不管你现在的渲染目标是哪个，渲染目标是由root.nextExpirationTimeToWorkOn来决定的。</p><p>那么他们有什么区别呢？主要区别在于发挥作用的阶段</p><p>expirationTime作用于调度阶段，主要指责是：</p><ul><li>决定是异步执行渲染还是同步执行渲染</li><li>作为react-scheduler的timeout标准，决定是否要优先渲染</li></ul><p>nextExpirationTimeToWorkOn主要作用于渲染阶段：</p><ul><li>决定那些更新要在当前周期中被执行</li><li>通过跟每个节点的expirationTime比较决定该节点是否可以直接bailout（跳过）</li></ul><p>他们都是通过pendingTime、suspenededTime和pingedTime中删选出来的，唯一的不同是，nextExpirationTimeToWorkOn在没有pending或者pinged的任务的时候会选择最晚的suspendedTime，而expirationTime会选择最早的<br>expirationTime的变化：</p><ul><li>在scheduleWork的时候通过markPendingExpirationTime设置</li><li>在beginWork的时候被设置为NoWork</li><li>在onUncaughtError的时候设置为NoWork</li><li>onSuspend的时候又会设置回当次更新的expirationTime</li></ul><h2 id="nextflushedexpirationtime" tabindex="-1">nextFlushedExpirationTime <a class="header-anchor" href="#nextflushedexpirationtime" aria-label="Permalink to &quot;nextFlushedExpirationTime&quot;">​</a></h2><p>这个是在fiber-scheduler中的一个全局变量，用来记录下一个需要渲染的FiberRoot的过期时间。注意他筛选的时候整个应用中所有FiberRoot的优先级（是的，你没看错，应该 React 应用是可以有多个FiberRoot，比如你执行两次ReactDOM.render），并不关心每个FiberRoot子树的优先级。</p><p>他是在findHighestPriorityRoot中被赋值的，会遍历firstScheduleRoot -&gt; lastScheduledRoot链表中所有root，并找到优先级最高（也就是expirationTime最小）的那个root进行赋值，并安排渲染</p><h2 id="nextlatestabsolutetimeoutms" tabindex="-1">nextLatestAbsoluteTimeoutMs <a class="header-anchor" href="#nextlatestabsolutetimeoutms" aria-label="Permalink to &quot;nextLatestAbsoluteTimeoutMs&quot;">​</a></h2><p>他的作用是在Suspense组件捕获到挂起之后，增加一个timeout来强制重新渲染一次的，不过目前看不出这个timeout有什么用</p><p>这个跟Suspense组件的maxDuration有关，但是官方没公布用法，从源码中也看不出有什么用处，原以为是<strong>多少毫秒内不显示fallback的内容</strong>，结果测试了一下发现没用。等有空再研究一下，或者等官方正式发布吧，<em>毕竟现在就算研究出来了，可能分分钟就被改了，16.5 的时候还叫delayMs，16.6 就改成maxDuration了</em>。</p><h2 id="currentschedulertime-currentrenderertime" tabindex="-1">currentSchedulerTime &amp; currentRendererTime <a class="header-anchor" href="#currentschedulertime-currentrenderertime" aria-label="Permalink to &quot;currentSchedulerTime &amp; currentRendererTime&quot;">​</a></h2><p>这两个时间是用来是用来记录当前时间的，在<strong>计算过期时间</strong>和<strong>比较任务是否过期</strong>的时候都会用到currentRendererTime，currentSchedulerTime大部分时候都是等于currentRendererTime的，那为什么要设置两个时间呢？</p><p>这就是因为batchedUpdates了，在这种情况下如果同时创建了多个更新是会为每次更新计算过期时间的，而计算是要花时间的，如果每次都是请求当前时间，那么同一个batch中的不同更新得到的过期时间就会是不一样的，所以在一个batch中获取的当前时间应该是一样的，所以就设置了这么一个值，在我们请求当前时间的方法中有这么一段代码：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">findHighestPriorityRoot</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  nextFlushedExpirationTime </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> NoWork </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#A6ACCD;">  nextFlushedExpirationTime </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> Never</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">recomputeCurrentRendererTime</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">currentSchedulerTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentRendererTime</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentSchedulerTime</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>findHighestPriorityRoot会设置nextFlushedExpirationTime，也就是只有在当前没有等待中的更新的情况下，才会重新计算当前时间。</p>`,57),r=[p];function c(d,m,y,u,F,h){return s(),n("div",null,r)}const x=e(i,[["render",c]]);export{D as __pageData,x as default};
