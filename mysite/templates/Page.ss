<!DOCTYPE html>
<html class="no-js" lang="{$ContentLocale}">
<head>
<% include HeaderMeta %>
</head>
<body class="{$ClassName} {$SliderClass}" id="{$URLSegment}">
    {$TrackingCodeTop.RAW}
    <div id="wrapper">
        <div class="content-wrap">
            <% include Header %>
            <section id="mainContent">
                {$Layout}
            </section><!-- /#mainContent -->
            <% include Footer %>
        </div><!-- /.content-wrap -->
        <% include Navigation_Popout %>
    </div><!-- /#wrapper -->
    {$TrackingCodeBottom.RAW}
</body>
</html>