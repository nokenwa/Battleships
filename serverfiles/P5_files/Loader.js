function loader(itemstobeloaded){
  var mode = typeof itemstobeloaded;
  var search, loaded;
  
  if(mode=='string'){
    search = itemstobeloaded.search('png')
    if (search !== -1){loaded = loadImage(itemstobeloaded); return loaded;}
  }
  
  console.log('Loading: 50%')
}