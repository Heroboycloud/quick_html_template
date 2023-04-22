var user={
  fullname: "Akindele ABDULAZEEZ",
  username: "@akindel",
  age: 22,
  name: "Ope"
  
}



var data={
  user: user,
  name: user.name,
  developed_by: "azeez",
  title: "Webpage developed 💧💧",
  path: "",
  users:["ade","bayo","timi"],
  range: 0
};
Vue.filter('capitalize', function (string)
{   
  var string= string.toLowerCase();
  var capitalFirst = string.charAt(0).toUpperCase()
var noCaseTail = string.slice(1, string.length )
return capitalFirst + noCaseTail    }
);


let surname= "Snow";

new Vue({
  el:'body',
  data: data,
  methods:{
    toast(e){
      this.range++;
     // console.dir(e);
     
    },
    saveSurname () {   
      surname = this.$el.querySelector('#surname').value  }
  },
  computed: {
    computedFullName(){
      return this.name + '' + surname;
    },
    MyCount:{
      get(){
        return this.user.age / 2;
      },
      set(val){
        this.user.age = val *2;
      }
    }
  },
created(){
  console.log("ready");
  document.title= this.title + "by " + this.developed_by;
  this.path= window.location.pathname
}
  
  
  
});