//Create empty array of rocket launches:
let launches = [];

const loadData = () => {
    //get data from the API:
    fetch("https://api.spacexdata.com/v5/launches")
        .then(result => result.json()) //strip to json format
        .then(data => launches = data)
        .then(()=> {console.log(launches)})

        .then(() => {
        const list = document.querySelector("#launch-list")
        
        //map each launch to its name/article/date/image
        const launchNames = launches.map(launch => launch.name);
        const launchArticle = launches.map(launch => launch.links.article);
        const launchDate = launches.map(launch => launch.date_local);
        const launchImage = launches.map(launch => launch.links.patch.small);

        //loop through all the launches:
        launches.forEach((launch) => {
                //document.createElement() -- creates HTML element

                const launchName = document.createElement("li");
                launchName.innerText= launch.name;
                list.appendChild(launchName);

                const launchArticle = document.createElement("a");
                launchArticle.href = launch.links.article;
                launchArticle.innerText = launch.links.article;
                list.appendChild(launchArticle);

                const launchDate = document.createElement("li");
                launchDate.innerText = launch.date_local;
                list.appendChild(launchDate);

                const launchImage = document.createElement("img");
                launchImage.src= launch.links.patch.small;
                list.appendChild(launchImage);



        });


    })
    .catch(error => console.error("something broke"))


}
//call localData
loadData();

