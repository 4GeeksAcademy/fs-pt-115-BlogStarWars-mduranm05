import logoImageUrl from "../assets/img/LogoDragonBallZ.jpg";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();



	return (
		<nav className="navbar navbar-light bg-light mb-3 px-4 sticky-top">
			<div className="container-fluid">
				<Link to="/">
					{/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
					<img
						src={logoImageUrl}
						alt="logo dragonBallZ"
						style={{ height: '50px' }}
					/>
				</Link>
				<div className="dropdown">
                    <button 
                        className="btn btn-primary dropdown-toggle" 
                        type="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Favoritos <span className="badge bg-dark">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-center">(Vacío)</li>
                        ) : (
                            store.favorites.map((favorito) => (
                                <li key={`${favorito.type}-${favorito.id}`} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/${favorito.type}/${favorito.id}`} className="text-decoration-none text-dark">
                                        {favorito.name}
                                    </Link>
                                    <button 
                                        className="btn btn-sm"
                                        onClick={() => dispatch({ type: 'REMOVE_FAVORITE', payload: favorito })}
                                    >
                                        <i className="fas fa-trash text-danger"></i>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
			</div>
		</nav>
	);
};