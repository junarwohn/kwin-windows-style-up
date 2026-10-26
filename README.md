# KWin Windows-Style Up

A lightweight KWin script that adds Windows-style upward window tiling and maximize behavior to KDE Plasma 6.

## Features

Press the configured shortcut to:

- Tile a normal window to the upper half of the screen.
- Maximize a window already tiled to the upper half.
- Maximize windows tiled to the upper-left or upper-right corner.
- Restore a maximized window to its non-maximized state.

## Requirements

- KDE Plasma 6
- KWin
- Tested environment: KDE Plasma 6.8.1 on Arch Linux (Wayland)

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/kwin-windows-style-up.git
cd kwin-windows-style-up
```

Install the KWin script:

```bash
kpackagetool6 --type=KWin/Script -i .
```

Enable it:

```bash
kwriteconfig6 --file kwinrc \
  --group Plugins \
  --key kwin-top-maximizeEnabled true

qdbus6 org.kde.KWin /KWin reconfigure
```

## Keyboard Shortcut

1. Open System Settings → Keyboard → Shortcuts.
2. Search for `Windows Style Up`.
3. Remove the existing `Alt+Up` assignment from `Quick Tile Window to the Top`, if present.
4. Assign `Alt+Up` to `Windows Style Up`.

The script initially registers `Meta+Ctrl+Up` as its default shortcut.

## Usage

| Window State | Shortcut Result |
|---|---|
| Normal | Tile to upper half |
| Top half | Maximize |
| Top-left quarter | Maximize |
| Top-right quarter | Maximize |
| Maximized | Unmaximize |

## Updating

After pulling the latest changes:

```bash
qdbus6 org.kde.KWin /Scripting \
  org.kde.kwin.Scripting.unloadScript \
  kwin-top-maximize

kpackagetool6 --type=KWin/Script -u .

qdbus6 org.kde.KWin /KWin reconfigure
qdbus6 org.kde.KWin /Scripting \
  org.kde.kwin.Scripting.start
```

## Limitations

- Tiled window detection uses window geometry and may be affected by tiling gaps.
- Restoring a maximized window does not necessarily restore its previous tile position.
- Other Plasma versions and X11 sessions have not been verified.

## License

Add a license file before distributing the project under an open-source license.
