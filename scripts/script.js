async function fetchData() {
  const res = await fetch("https://api.checks.art/stats");
  const record = await res.json();
  const percentageListed = ((record?.totalListed / record?.totalSupply) * 100).toFixed(1);
  document.getElementById("collectors").innerHTML = record?.collectors;
  document.getElementById("totalListed").innerHTML = record?.totalListed;
  document.getElementById("percentageTotalListed").innerHTML = percentageListed;
  document.getElementById("trackedVolume").innerHTML = record?.trackedVolume.toFixed(0);
  document.getElementById("uniqueOwners").innerHTML = record?.uniqueOwners.toFixed(0);
  document.getElementById("topCollector").innerHTML = record?.ownerDistribution.pop().tokenCount;
  document.getElementById("avgCollector").innerHTML = record?.avgOwned;
  document.getElementById("daySales").innerHTML = record?.daySales;
  document.getElementById("floorPrice").innerHTML = record?.floorPrice.toFixed(2);
  document.getElementById("floorPriceUSD").innerHTML = record?.floorPriceUSD.toFixed(2);
}
fetchData();
