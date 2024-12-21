<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('/Formulario1', 'CFormularios::MMostrarForm1');

$routes->get('/Formulario2', 'CFormularios::MMostrarForm2');

$routes->get('/Formulario3', 'CFormularios::MMostrarForm3');

$routes->get('/FormularioFinal', 'CFormularios::MMostrarFormFinal');

