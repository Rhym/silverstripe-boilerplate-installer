<!DOCTYPE html>
<html class="no-js" lang="{$ContentLocale}">
<head>
    <% include Header_Meta %>
</head>
<body class="{$ClassName} {$SliderClass}" id="{$URLSegment}">
    {$TrackingCodeTop.RAW}
    <% include OutdatedBrowser %>
    <div id="wrapper">
        <div class="content-wrap">
            <% include Header %>
            <div class="page">
                {$Layout}
            </div><!-- /.page -->
            <% include Footer %>
        </div><!-- /.content-wrap -->
        <% include Navigation_Popout %>
    </div><!-- /#wrapper -->
    {$TrackingCodeBottom.RAW}
</body>
</html>
