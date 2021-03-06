>yi蓑烟雨任平生




### CDN

全称: **Content Delivery Network** 或 **Content Distribute NetWork**, 即内容分发网络。


### 基本思路

尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。


### 目的

解决因分布、带宽、服务器性能带来的访问延迟问题，适用于站点加速、点播、直播等场景。使用户可就近取得所需内容，解决Internet网络拥挤的状况，提供用户访问网站的速度和成功率。

控制时延无疑是现代信息科技的重要指标，CDN的意图就是尽可能的减少资源在转发、传输、链路抖动等情况下顺利保障信息的连贯性。

CDN扮演的就是一个护航者和加速者的角色，更快准狠的触发信息和触达每一位用户，带来更为精致的使用体验。

再通俗点来说就是在网速一定的前提下，CDN就像一个快递小哥，把你的电影，网购，订单的”数据包裹“，从一个服务器快递到另一个服务器，并能做到快速无误送达，而且CDN这个快递员很是聪

明，他不是在用蛮力瞎跑，乱撞。

他还承建了很多家快递点，就近快递(**缓存**);

他还善于优化快递路径(**调度**);

还会对包裹进行更合理的重新打包(**协议优化**);


### 基础架构

最简单的CDN网络由一个DNS服务器和几台缓存服务器组成：
    
    1、当用户点击网站页面上的内容URL，经过本地DNS系统解析，DNS系统会最终将域名的解析权交给CNAME指向的CDN专用DNS服务器

    2、CDN的DNS服务器将CDN的全局负载均衡设备IP地址返回用户

    3、用户向CDN的全局负载均衡设备发起内容URL访问请求

    4、CDN全局负载均衡设备根据用户IP地址，以及用户请求的内容URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求

    5、区域负载均衡设备会为用户选择一台合适的缓存服务器提供服务，选择的依据包括：根据用户IP地址，判断哪一台服务器距离服务器最近；根据用户所请求的URL中携带的内容名称，判断哪一台服务器上有用户所需的内容；查询各个服务器当前的负载情况，判断哪一台服务器尚有服务能力。基于以上这些条件的综合分析之后，区域负载均衡设备会向全局负载均衡设备返回一台缓存服务器的IP地址

    6、全局负载均衡设备把服务器的IP地址返回给用户

    7、用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送到用户终端。如果这台缓存服务器上并没有用户想要的内容，而区域均衡设备依然将它分配给了用户，那么这台服务器就要向它的上一级缓存服务器请求内容，直到追溯到网站的源服务器将内容拉到本地。


### 服务模式

简单地说，CDN是一个经策略性部署的整体系统，包括分布式存储、负载均衡、网络请求的重定向和内容管理4个要件，而内容管理和全局的网络流量管理是CDN的核心所在

通过用户就近性和服务器负载的判断，CDN确保内容以一种极为高效的方式为用户的请求提供服务


### 举例说明

国内访问量较高的网站、直播、视频平台，均使用CDN网络加速技术，虽然网站的访问巨大，但无论在什么地方访问都会感觉速度很快。而一般的网站如果服务器在网通，电信的用户访问就会很慢，反之亦然

通过在现有的Internet中增加一层新的网络架构，将网站的内容发布到最接近用户的cache服务器内，通过DNS负载均衡的技术，判断用户来源就近访问cache服务器取得所需的内容，解决Internet网络拥塞情况，提高用户访问网站的响应速度，如同提供了多个分布在各地的加速器，以达到快速、可冗余的为多个网站加速的目的

CDN服务最初用于确保快速可靠地分发静态内容，这些内容可以缓存，最适合在网速庞大的网络中存储和分发，该网络在几十多个国家的十几个网络中的覆盖CDN网络服务器。由于动态内容必须通过互联网来传输，因此要提供快速的网络体验。如今的CDN可谓是大文件、小文件、点播、直播、动静皆宜


### 主要特点


    1、本地cache加速，提高了企业站点（尤其含有大量图片和静态页面站点）的访问速度，并大大提高以上性质站点的稳定性

    2、镜像服务消除了不同运行商之间互联的瓶颈造成的影响，实现了跨运营商的网络加速，保证不同网络中的用户都能得到良好的访问质量

    3、远程加速 远程访问用户根据DNS负载均衡技术智能自动选择cache服务器，选择最快的cache服务器，加快远程访问的速度

    4、贷款优化 自动生成服务器的远程Mirror cache服务器，远程用户访问时从cache服务器上读取数据，减少远程访问的带宽、分担网络流量、减轻原站点web服务器负载等功能

    5、集群抗攻击 广泛分布的CDN节点加上节点之间的智能冗余机制，可以有效的预防黑客入侵以及降低各种DDoS攻击对网站的影响，同时保证较好的服务质量


### 关键技术

内容发布：它借助于建立索引、缓存、流分裂、组播等技术

内容路由：它是整体性的网络负载均衡技术，通过内容路由其中的重定向（DNS）机制，在多个远程POP上均衡用户的请求，以使用户请求得到最近内容源的响应

内容交换：它根据内容的可用性、服务器的可用性以及用户的背景，在POP的缓存服务器上，利用应用层交换、流分裂、重定向等技术，智能地平衡均载流量

性能管理：它通过内部和外部监控系统，获取网络部件的状况信息，测量内容发布的端到端性能（如保丢失、延时、平均带宽、启动时间、帧速率等），保证网络处于最佳运行状态


### 适用范围

一般来说以资讯、内容为主的网站，具有一定访问体量的网站

例如资讯网站、政府机构网站、行业平台网站、商城等以动态内容为主的网站

例如论坛、博客、交友、SNS、网络游戏、搜索/查询、金融等。提供http下载的网站

例如软件开发商、内容服务提供商、网络游戏运行商、源码下载等有大量流媒体点播应用的网站

例如拥有视频点播平台的电信运营商、内容服务提供商、体育频道、宽频频道、在线教育、视频博客等



搬自[视界云知乎](https://www.zhihu.com/question/37353035/answer/175217812)





>既然选择了远方，便只顾风雨兼程。

—— HandSomeTT 2017.11.01


