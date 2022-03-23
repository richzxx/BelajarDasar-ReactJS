    
// Pisahkan File React JS ke dalam folder Src agar bisa di compile dengan Babel JS
const root = document.querySelector('#root');

    // React JS returnnya = Objek Literal
    const h1 = React.createElement('h1', {
        children: 'My First React App!',
        className: 'mt-10 font-bold text-center text-3xl'
    });

    const h2 = React.createElement('p', {
        children: 'Collaborate with Tailwind CSS',
        className: 'mb-5 mt-2 text-center italic'
    });

    // Me-render 2 Element dengan nested Element
    const p1 = React.createElement('p', {
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci nemo voluptatibus quia, nam earum mollitia exercitationem possimus consectetur cum cupiditate quae. Debitis nulla vitae fuga porro ipsam nemo, vero delectus!',
        className: 'text-justify mb-5'
    });

    const p2 = React.createElement('p', {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam rem minima provident, quae asperiores alias quam eum porro neque voluptatum deleniti ipsum saepe? Possimus incidunt accusantium quaerat et at explicabo nobis nostrum fugit nihil est. Ad deleniti, possimus, quibusdam doloribus autem laudantium eos soluta veniam commodi dolor tenetur dolorem consequuntur!',
        className: 'text-justify'
    });

    // Menggunakan Jsx dengan Compiler BabelJS (standalone)
    const babelJS = (
        <p className="text-justify mb-10 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, corrupti? Necessitatibus dolores odit facere quod. Omnis pariatur optio asperiores odit nisi dolorem nesciunt consequatur perferendis doloremque provident earum molestiae quidem suscipit dolore officiis, saepe repudiandae, ratione a eveniet tempore similique, id quaerat laborum quisquam. Sed voluptate quia labore officiis ut.</p>
    );

    // Embed Variabel di dalam Jsx
    const name = 'Richard';

    // Embed value di Props tidak memakai tanda kutip apapun
    const className = 'text-2xl mb-4 font-semibold';
    const greet = <p className={className}>Hello {name}!</p> 

    // Embed Img ke dalam Jsx (Wajib memakai Sub closing Tag)
    const image = <img src="https://source.unsplash.com/1080x720/?Technology" alt="Image Technology" className='mb-10 rounded-3xl shadow-lg'/>

    // Belajar React Component 
    // Bikin Argumennya dengan props terus manggilnya sama kayak object
    function Halo(props) {
        return <p className={props.class}>Sedang Belajar <b>{props.name}</b></p>
    }

    function time() {
        return <p className="my-3 text-center font-semibold">{new Date().toLocaleTimeString()}</p>
    }

    const item1 = <div className="box mt-5 mx-auto rounded-3xl"></div>
    
    function clickMe(msg) {
        alert(msg);
    }

    //Belajar React Event Handling
    const btn1 = (
        <button onClick={clickMe.bind(this, 'ZONK!')}
                className="w-auto h-auto block py-2 px-5 bg-sky-500 mx-auto my-5 rounded-3xl text-white font-bold shadow-lg hover:bg-sky-600 hover:-translate-y-2 focus:ring focus:ring-sky-300 transition duration-500">Tweet</button>
    );
    
    // Belajar React State (App Counter)
    function Counter() {
        const [count, setCount] = React.useState(0);

        return (
            <div className="flex justify-center my-5">
                <button onClick={function () {
                    setCount(count - 1)
                }} className="w-auto h-auto py-auto px-5 bg-teal-500 rounded-3xl shadow-lg hover:bg-teal-300 transition duration-300">Kurang</button>

                <h3 className="mx-5 text-2xl font-bold">{count}</h3>

                <button onClick={function () {
                    setCount(count + 1)
                }} className="w-auto h-auto py-auto px-5 bg-teal-500 rounded-3xl shadow-lg hover:bg-teal-300 transition duration-300">Tambah</button>
            </div>
        );
    }
    
    //TODO React Component Lifecycle memakai React.useEffect()
    //TODO untuk memantau perubahan dari state apapun di dalam sebuah function
    //TODO Bisa diatur dengan menggunakan parameter ke-2 [Array] bisa juga dibuat Empty Array
    //TODO Video ada di part 21 - 23  
    // React.useEffect(function () {
    //     console.log('React Use Effect');
    // });

    // Conditional Rendering
    function App() {

        const [login, setLogin] = React.useState(false);

        if (login) {
            return (
                <>
                <h1 className="text-3xl mb-3">Sudah Login</h1>
                <button className="px-5 py-2 text-white font-bold rounded-3xl bg-sky-500 hover:bg-sky-600 transition duration-500"
                    onClick={function () {
                    setLogin(false);
                    }}>Logout</button>
                </>
            )
        }

        return (
            <>
                <h1 className="text-3xl mb-3">Belum Login</h1>
                <button className="px-5 py-2 text-white font-bold rounded-3xl bg-sky-500 hover:bg-sky-600 transition duration-500"
                    onClick={function () {
                        setLogin(true);
                    }}>Login</button>
            </>
        )
    }

    // Form React
    function CobaForm() {
        // const namaRef = React.useRef(null); Pake Cara Ref
        const [nama, setNama] = React.useState('');

        function formSubmit(event) {
            event.preventDefault();
            // const nama = namaRef.current.value;
            
            if (nama == null || nama === '') {
                console.log('Nama Kamu Belum diisi');
            } else {
                console.log(`Nama kamu ${nama}`);
            }

        }

        return (
            <>
                <form className="bg-white shadow-md rounded-2xl max-w-lg mt-10 px-8 pt-6 pb-8 mb-4" onSubmit={formSubmit}>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="">Nama : </label>
                        <input className="shadow appearance-none border border-slate-500 focus:border-sky-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline transition duration-300" type="text" name="nama" /** 
                        ref = { namaRef } Ubah Reference nya disini
                        */
                        onChange={function (event) {
                            setNama(event.target.value);
                        }} /** Disini kita menggunakan Controlled Component*/
                        />
                    </div>
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline transition duration-500" type="submit">Submit</button>
                </form>
            </>
        )
    }

    function CobaFetch() {

        // Fetch data itu Async, jadi harus Chaining dengan .then biar ditunggu dulu proses fetch datanya selesai. Baru bisa diproses Datanya kembali.

        const [news, setNews] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        React.useEffect(function () {
            async function getData() {
                const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
                const response = await request.json();

                // Ubah State News & Loading
                setNews(response);
                setLoading(false);
            }
            getData();
        }, []);

        return (
            <>
            
            <h1 className="my-10 text-2xl font-bold text-center">Belajar Data Fetch</h1>
                
            {/* Jika mau tampil State Loadingnya, kita harus menggunakan Async dan Await */}
            {loading && (<h2 className="text-lg font-semibold text-center">Data Loading ...</h2>)}

            <ul className="list-disc">
                {news.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
            
            </>
        )
    }

    function BelajarTodos() {
        const [activity, setActivity] = React.useState('');
        const [todos, setTodos] = React.useState([]);
        const [edit, setEdit] = React.useState({});
        const [nullValue, setNullValue] = React.useState('');

        function generateId() {
            return Date.now();
        }

        function saveTodoHandler(event) {
            event.preventDefault();

            if (!activity) {
                return setNullValue('Activity is Null! Please input activity');
            }

            // Edit Todo Hadnler (Nested with Save Todo Handler)
            if (edit.id) {

                // Masukin Value yang di Input (di edit)
                const updatedTodo = {
                    ...edit,
                    activity
                }

                // FindIndex yang mau diedit
                const editTodoIndex = todos.findIndex(function (todo) {
                    return todo.id == edit.id
                });

                // Clone Array todos (karena mutable)
                const updatedTodos = [...todos];
                updatedTodos[editTodoIndex] = updatedTodo;

                setTodos(updatedTodos);
                return cancelEditHandler();
            }

            setTodos([...todos, {
                id: generateId(),
                activity: activity,
                status: false
            }]);
            setNullValue('');
            setActivity('');
        }

        function removeTodoHandler(todoId) {
            
            const filteredTodos = todos.filter(function (todo) {
                return todo.id !== todoId;
            });

            //TODO Jadi, kita menSet todo array nya dengan menfilter id yg kita click. Supaya id yg kita klik tidak terfilter bersamaan dengan todo yg tidak kita klik.
            //TODO Maka dari itu, ...todos yg ada akan berkurang karena terfilter. Intinya, prinsipnya sama dengan Hapus (Delete)
            
            setTodos(filteredTodos);

            // Meminimalisir Eksekusi
            if (edit.id) cancelEditHandler(); 
        }

        function editTodoHandler(todo) {
            setNullValue('');
            setActivity(todo.activity);
            setEdit(todo);
        }

        function cancelEditHandler() {
            setEdit({});
            setActivity('');
        }

        function doneTodoHandler(todo) {
            
            const updatedTodo = {
                ...todo,
                status: todo.status ? false : true
            }
            
            // FindIndex Todos yang mau diedit
            const editTodoIndex = todos.findIndex(function (currentTodos) {
                return currentTodos.id == todo.id
            });

            // Clone Array todos (karena mutable)
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo;

            setTodos(updatedTodos);
        }

        return (
            <div className="">
                <h1 className="my-10 text-2xl font-bold text-center block">Simple Todo List</h1>
                <form onSubmit={saveTodoHandler}>
                    <input
                        type="text"
                        className="block mx-auto shadow-md appearance-none border border-slate-500 focus:border-sky-500 rounded w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                        placeholder="Activity Name"
                        value={activity}
                        onChange={function (event) {
                            setActivity(event.target.value);
                        }}
                    />
                    {edit.id && <button className="block mx-auto px-4 py-2 rounded-full font-bold text-white bg-red-500 text-lg font-sans hover:bg-red-600">X</button>}
                <button
                        type="submit"
                        className={`block mx-auto my-2 px-4 py-2 ${edit.id ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-sky-500 hover:bg-sky-600'} rounded-3xl shadow-md text-white font-semibold hover:scale-105 transition duration-300`}
                >{edit.id ? 'Save Changes' : 'Submit'}</button>
                </form>

                {nullValue && <div className="text-slate-700 text-2xl text-center">{ nullValue }</div>}

                {todos.length > 0 ? (
                    <ol className="list-decimal mt-8 mx-20">
                    {todos.map(function (todo) {
                        return (
                            <li 
                                className="mt-2"
                                key={todo.id}>
                            
                            <input
                            type="checkbox"
                            checked={todo.status}
                            onClick={doneTodoHandler.bind(this, todo)}
                            className="mr-3 w-5 h-5 rounded-3xl border border-slate-700 hover:bg-slate-300 transition duration-300"
                            />
                            {todo.activity} - 
                            
                            <span className={`font-semibold mr-3 ${todo.status ? 'text-green-500' : 'text-yellow-500 italic'}`}> {todo.status ? 'Done' : 'Waiting'}</span>
                            <button
                                onClick={editTodoHandler.bind(this, todo)}
                                className="ml-3 px-4 py-2 text-white font-semibold rounded-3xl bg-yellow-500 hover:bg-yellow-600 hover:translate-x-1 transition duration-300"
                            >Edit</button>
                            <button
                                onClick={removeTodoHandler.bind(this, todo.id)}
                                className="ml-3 px-4 py-2 text-white font-semibold rounded-3xl bg-red-500 hover:bg-red-600 hover:translate-x-1 transition duration-300"
                            >Hapus</button>
                        </li>
                        );
                    })}
                </ol>
                ) : <h2 className="mt-10 text-xl text-slate-700 font-semibold text-center">Empty Todos</h2>}
            </div>
        )
    }

    function tampilkan() {
    // Dibungkus dengan 1 Parent
    const element = React.createElement('div', {
        className: 'container p-5 max-w-full md:max-w-2xl md:mx-auto'
    },
        // Nested Element React JS
        h1,
        h2,
        image,
        p1,
        p2,
        babelJS,
        greet,

        React.createElement('li', null, 'Apple'),
        React.createElement('li', null, 'Orange'),
        React.createElement('li', null, 'Grape'),

        <Halo name='React Component' class='mt-10 text-center text-2xl text-slate-800'/>,
        time(),
        item1,
        btn1,
        <Counter />,
        <App />,
        <CobaForm />,
        <CobaFetch />,
        <BelajarTodos />,

        // Buat Scroll jauh ke bawah
        React.createElement('div', {className: "mb-72"})
        
    )

    ReactDOM.render(element, root)
    };
        
    setInterval(function () {
        tampilkan()
    }, 1000);