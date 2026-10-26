const TOLERANCE = 12;

function near(a, b) {
    return Math.abs(a - b) <= TOLERANCE;
}

function isTopTiled(window) {
    const area = workspace.clientArea(
        KWin.MaximizeArea,
        window
    );

    const frame = window.frameGeometry;

    const atTop = near(frame.y, area.y);
    const atLeft = near(frame.x, area.x);
    const atRight = near(
        frame.x + frame.width,
        area.x + area.width
    );

    const halfHeight = near(
        frame.height,
        area.height / 2
    );

    const fullWidth = near(
        frame.width,
        area.width
    );

    const halfWidth = near(
        frame.width,
        area.width / 2
    );

    const topHalf = atLeft && fullWidth;

    const topLeft = atLeft && halfWidth;
    const topRight = atRight && halfWidth;

    return atTop &&
           halfHeight &&
           (topHalf || topLeft || topRight);
}

function handleUp() {
    const window = workspace.activeWindow;

    if (!window || !window.normalWindow) {
        return;
    }

    if (window.maximizeMode === 3) {
        window.setMaximize(false, false);
        return;
    }

    if (isTopTiled(window)) {
        window.setMaximize(true, true);
        return;
    }

    workspace.slotWindowQuickTileTop();
}

registerShortcut(
    "WindowsStyleUp",
    "Windows Style Up",
    "Meta+Ctrl+Up",
    handleUp
);
