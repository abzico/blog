---
layout: post
title: "HeaTap - Devlog #1"
subtitle: "Start with HeaTap development"
author:     "Wasin Thonkaew"
header-img: "img/products/raceplant/raceplant-screenshot.png"
---

# Start from Prototypting

During prototyping period, I keep thinking about map and location. Having seen [Hoodmaps](https://hoodmaps.com) by Pieter Levels as well, I can say it plays the huge influencial part of it. I want to make it available and operatable under WeChat's mini-program which has limited features/integration (under JSCore, cannot use `window`, `document`, etc object for example) by focusing on Chinese territory without dependent on external Western services. The project is **not** done yet, and I continue to complete the existing features, also might add something else along the way.

I got MVP (Minimum viable product) within 48 hours that mainly focuses only Paint mode feature,

<center>
	![heatap early screenshot](/img/heatap/heatap-wip-1.jpg)<br/>
	<sub>Heatap Early Screenshot</sub>
</center>

Then I continued after the 1st week til the end of the month which included 3 times of iterative of UI, implementation for both front-end and backend, refinement, bug fixes, thinking/discussing with my Chinese partner about additional features & how to monetize in the future. That covers timespan for roughly 3 weeks to get to the current point.

> Concept is Paint & Pin or PP (I might use *PP* as the project name when launch). That said you Paint to mark certain area, and Pin to mark specific location with interesting comment.

> Chinese people often call *P* when they refer to Photoshop<sub><span style="font-size:10px">TM</span></sub> i.e. You *P* him in this photo? That's why I want to play around with this word-playing to align with the culture a bit :P

Let's see below.

<center>
![heatap general interaction](/img/heatap/1.gif)
![heatap pin mode](/img/heatap/2.gif)
</center>

<center>
![heatap zoom in/out](/img/heatap/3.gif)
![heatap paint mode](/img/heatap/4.gif)
</center>

From left to right, top to bottom.

* General interaction
* Pin mode
* Zoom in/out + Panning
* Paint mode

Here a clear screenshot

<center>
<a href="/img/heatap/heatap-screenshot-old.jpg" class="no-line"><img alt="heatap screenshot old" src="/img/heatap/heatap-screenshot-old.jpg"/></a><br/>
<sub>Image is resized. Click for full resolution.</sub>
</center>

Don't mind English UI for now as I've planned to localize it to Chinese with the help from my partner.  

> Tencent deviates away from native ecosystem. One good example is WeChat has to remove its [tipping feature](http://www.scmp.com/tech/china-tech/article/2089216/tencent-disables-tipping-function-iphone-version-wechat) from its iOS app. Android is not affected.

Tencent tries to push web apps into its ecosystem; WeChat platform. I see this as opportunity to quickly tap into Chinese market. Its mini-program is the prime flagship at the moment. It's getting improvement, more API support, better IDE, and lucrasive of traffic as seen from growth of [WeChat platform](https://mp.weixin.qq.com/s?__biz=MzAxNzYxMzc0OA==&mid=2650664972&idx=1&sn=24809772be2e566b3103b77e84bc60e3&chksm=83eb86d7b49c0fc179bba0e8fd19924d50fc24ab79e4d7c143d4ceca448995aec75f5992e7fa&mpshare=1&scene=1&srcid=0424M1QT1gWxcpEPep1bJRfr&pass_ticket=KEmzbgqBxC8w8r%2Fps%2FWm4jYMNr3EA%2Fd16BVKiT1cbvDN27Ah4fUrO8k%2FiaVDzo%2BJ#rd) and report of 40% of traffic for Mobike coming from its mini-program alone (I got this from attending [Techcrunch Shenzhen 2017](http://tc.technode.com/2017/en/)).

WeChat mini-program is now 9 months old. I ever remember that I was following this platform closely. I still think that I didn't act fast enough. The platform is quite old, still with future potential. The best time to tap into platform is in the past, the second best time is now.

# What's it Now?

Time passed reasonable well. UIs are fixed, and pin marker icon is updaed with new one to represent the style I want.

<center>
	<a href="/img/products/heatap/screenshot.jpg" class="no-line"><img src="/img/products/heatap/screenshot.jpg" /></a><br/>
	<sub>Latest screenshot as of September</sub>
</center>

The filtering system was added. Marker icons are updated. Minor areas like loading spinner is updated for better UX. Code is fixed.

The following is **Pinning** process to add a new pin for new place on the map starting from the left-most one to right-most. You hover the center of cursor to the desire location, add a balloon message, then confirm.

<center>
	<a href="/img/heatap/heatap-september-1.jpg" class="no-line"><img src="/img/heatap/heatap-september-1.jpg" width="30%"/></a>
	<a href="/img/heatap/heatap-september-2.jpg" class="no-line"><img src="/img/heatap/heatap-september-2.jpg" width="30%"/></a>
	<a href="/img/heatap/heatap-september-3.jpg" class="no-line"><img src="/img/heatap/heatap-september-3.jpg" width="30%"/></a><br/>
	<sub>Click on each image for full size version</sub>
</center>

For now, we need to pay attention to handling the application for WeChat's micro payment in order for us to have all required API features ready in the future. Although we didn't plan to immediately charge service fee for Heatap at launch, but we need to get this done to be ready for our next future applets.

Until next time that we complete our administrative task, we will update you back here again.