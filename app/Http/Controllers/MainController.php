<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;

class MainController extends Controller
{
    public function index() {
        $blogs = Blog::all();

        return view('main', ['blogs' => $blogs]);
    }
}
