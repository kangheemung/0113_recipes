import './App.css';
import{useEffect,useState,useRef} from 'react';
import Form from './components/Form'
import Recipe from './Recipe/Recipe';

function App() {
  const APP_ID = '3a463df7'
  const APP_KEY = '631a41c372807a9308a12c665d2c087a'
  const [name,setName]=useState("kang");
  const [search, setSearch] = useState("");
  const [query,setQuery]=useState("banana");//keywordの指定するところの部分
  const [recipes, setRecipes] = useState([]); //実際習得したAPI情報を入れる。
  const inputRef=useRef(null);
//初回のレンダリングの時指定された物がフォカスされるよおうにします。
useEffect(() => {
  if (inputRef.current) {
    inputRef.current.focus(); // Ensure that inputRef.current is not null
  }
}, []);

  //recipeAPIを呼び出します
  useEffect(() => {//呼び出したAPIを
    const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q="${query}"&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits);//API情報を代入することができます。
    };
    getRecipes();
}, [query]);//queryが変更された時にAPIから取得して
  //onsubmitしたとき呼び出したい関数になります。

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);//検索したらsetQueryに入る。
    setSearch('');//検索ボタン押したら空っぽになる。
  };
  const updateSearch = (e) =>{
    setSearch(e.target.value);//更新用の関数
  };
  //useEffect(()=>{
   // console.log("毎回レンダリングですよ！")
  //})//毎回レンダリング
  //useEffect(()=>{
   // console.log("レンダリングされた後に実行ですよ！")
  //},[])//初回レンダリング
  //useEffect(()=>{
  //  console.log(name+"さんこんにちは")
  //},[name])//設定レンダリング
  return (
  <div className='body'>
    {name}のページ
    <Form
    ref={inputRef}
    search = {search}
    onSubmit = {getSearch}
    getSearch={getSearch}
    updateSearch={updateSearch}/>
      <div>
        {recipes.map(recipe => (//APIから入った情報から一覧表示する。
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
  </div>
  
  );
}

export default App;
