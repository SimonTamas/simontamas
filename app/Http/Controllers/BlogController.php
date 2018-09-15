<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class BlogController extends Controller
{
    public function Start(Request $_request) {
        return view('blog');
    }

    public function ViewEntry(Request $_request, $_slug) {

    }
}
