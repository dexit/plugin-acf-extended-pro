<?php

if(!defined('ABSPATH')){
    exit;
}

/**
 * register store
 */
acf_register_store('local-templates');


/**
 * acfe_get_local_templates
 *
 * @return array|mixed|null
 */
function acfe_get_local_templates(){
    return acf_get_local_store('templates')->get();
}


/**
 * acfe_get_local_template
 *
 * @param $name
 *
 * @return array|mixed|null
 */
function acfe_get_local_template($name = ''){
    return acf_get_local_store('templates')->get($name);
}


/**
 * acfe_remove_local_template
 *
 * @param $name
 *
 * @return ACF_Data
 */
function acfe_remove_local_template($name = ''){
    return acf_get_local_store('templates')->remove($name);
}


/**
 * acfe_have_local_templates
 *
 * @return bool
 */
function acfe_have_local_templates() {
    return acf_get_local_store('templates')->count() ? true : false;
}


/**
 * acfe_is_local_template
 *
 * @param $name
 *
 * @return bool
 */
function acfe_is_local_template($name = ''){
    return acf_get_local_store('templates')->has($name);
}


/**
 * acfe_count_local_templates
 *
 * @return int
 */
function acfe_count_local_templates(){
    return acf_get_local_store('templates')->count();
}


/**
 * acfe_add_local_template
 *
 * @param $args
 *
 * @return bool
 */
function acfe_add_local_template($args = array()){
    
    $args = wp_parse_args($args, array(
        'title'     => '',
        'name'      => '',
        'active'    => true,
        'values'    => array(),
        'location'  => array(),
    ));
    
    acf_get_local_store('templates')->set($args['name'], $args);
    
    return true;
    
}