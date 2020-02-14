const adminStatements = {
  'get_value_from_key': 'select * from key_value where key=$key',
  'save_key_value': 'replace into key_value(key, value) values($key, $value)',
  'get_book_by_id': 'select * from book where id=$id',
  'get_book': 'select * from book where source=$source and source_id=$source_id',
  'get_books': `select * from book order by id desc limit $limit offset $offset`,
  'get_total_book': `select count(*) from book`,
  'insert_book': 'insert into book (name, source, source_id, created_at, updated_at) values($name, $source, $source_id, $created_at, $updated_at)',
  'insert_author': 'insert into author (name, slug, created_at, updated_at) values($name, $slug, $created_at, $updated_at)',
  'get_author_by_name': 'select * from author where name=$name',
  'insert_cat': 'insert into cat (name, slug, created_at, updated_at) values($name, $slug, $created_at, $updated_at)',
  'get_cat_by_name': 'select * from cat where name=$name',
  'insert_if_not_exist_book_author': 'insert OR IGNORE into book_author (book_id, author_id) values ($book_id, $author_id)',
  'insert_if_not_exist_book_chapter': 'insert OR IGNORE into book_chapter (book_id, chapter_id) values ($book_id, $chapter_id)',
  'insert_if_not_exist_book_cat': 'insert OR IGNORE into book_cat (book_id, cat_id) values ($book_id, $cat_id)',
}

module.exports = adminStatements
