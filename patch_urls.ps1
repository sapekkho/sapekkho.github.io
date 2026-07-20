$old = 'https://github.com/xomoash/sapekkho/releases/download/v1.0.0/Sapekkho-Setup-1.0.0.exe'
$new = 'https://github.com/sapekkho/sapekkho/releases/download/v1.1.2/Sapekkho-Setup-1.1.2.exe'

Get-ChildItem -Path .\assets, .\dist\assets -Recurse -File -Filter *.js | ForEach-Object {
  $p = $_.FullName
  $t = Get-Content -Path $p -Raw
  if ($t.Contains($old)) {
    $t = $t.Replace($old, $new)
    Set-Content -Path $p -Value $t -NoNewline
  }
}
