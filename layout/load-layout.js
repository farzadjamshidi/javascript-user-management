(function loadLayout()
{

    fetch("/layout/navbar.html")
        .then(response =>
        {
            return response.text();
        })
        .then(data =>
        {
            document.querySelector("navbar").innerHTML = data;
        });

    fetch("/layout/sidebar.html")
        .then(response =>
        {
            return response.text();
        })
        .then(data =>
        {
            document.querySelector("sidebar").innerHTML = data;
        });
})()