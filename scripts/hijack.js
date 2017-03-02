//http://stackoverflow.com/questions/3871358/get-all-the-href-attributes-of-a-web-site
var links = document.getElementsByTagName('a');

var linksArray = [].slice.call(links);

function addHandler(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

linksArray.forEach(addHandler);
